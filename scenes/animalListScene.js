import React from 'react';
import { WIDTH, HEIGHT } from '../styles/styles';
import DatabaseContent from '../components/databaseContent';

import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TextInput,
  ImageBackground
} from 'react-native';
import { sceneTitles, scenes } from '../scenes';
import AlphabetListView from 'react-native-alphabetlistview';

import animals from '../animals';

class Cell extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight
        onPress={() => {
          this.props.navigation.navigate(sceneTitles[scenes.ANIMAL_DETAIL].name,
          {animal: this.props.item.animal});
        }}
        underlayColor='#bbbbbb'
        style= {{marginVertical: 0 , maxWidth:"89%"}}
      >
        <View style={{paddingLeft: 5,flexDirection: 'row',  marginVertical:5}}>
          <Image style={{width: WIDTH/5, height: HEIGHT/20,marginRight: 5}} source={this.props.item.img}/>
          <Text style={{color: 'black', fontSize:HEIGHT/25, alignSelf: 'center',}}>{this.props.item.name}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

class SectionItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{
        backgroundColor: undefined,
        width: 30,
        height: 30,
        borderLeftWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
      }}>
        <Text style={{color: 'black', textAlign: 'center', fontWeight: '700'}}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

class SectionHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // inline styles used for brevity, use a stylesheet when possible
    var textStyle = {
      textAlign:'center',
      color:'black',
      fontWeight:'700',
      fontSize:24,
      backgroundColor: 'rgba(0,0,0,0)',
    };

    return(
      <Text style={textStyle}>{this.props.title}</Text>
    );
  }
}

export default class AnimalListScene extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.prepareSortedStructure(animals);
  }

  prepareSortedStructure(animals) {
    let state = {
      fullData: {}
    };

    const removeAccents = {
      'Č' : 'C',
      'Š' : 'S',
      'Ú' : 'U',
      'Ž' : 'Z',
      'Ě' : 'E',
      'Á' : 'A',
      'Ř' : 'R',
    };

    for (let animalID in animals) {
      let animal = animals[animalID];
      let firstLetter = animal.name.charAt(0).toUpperCase();

      if ((firstLetter === 'C') && (animal.name.charAt(1) === 'h')) {
        firstLetter = 'Ch';
      }

      if (firstLetter in removeAccents) {
        firstLetter = removeAccents[firstLetter];
      }

      if (!(firstLetter in state.fullData)) {
        state.fullData[firstLetter] = [];
      }

      state.fullData[firstLetter].push(animal);
    };

    // Czech sorting
    // @source: https://stackoverflow.com/a/17543552/2466089
    const charMapL = " 0123456789aábcčdďeéěfghiíjklmnňoópqrřsštťuúůvwxyýzž";
    const charMapU = " 0123456789AÁBCČDĎEÉĚFGHIÍJKLMNŇOÓPQRŘSŠTŤUÚŮVWXYÝZŽ";
    var charsOrder = {};
    for(var i in charMapL.split('')) {
      charsOrder[charMapL[i]] = parseInt(i);
      charsOrder[charMapU[i]] = parseInt(i);
    }

    function czechSort(s1, s2) {
      let idx = 0;
      while ( (idx < s1.length) && (idx < s2.length) && (charsOrder[s1[idx]] == charsOrder[s2[idx]])) {
          idx ++;
      }
      if ((idx == s1.length) && (idx == s2.length)) return 0;
      if (idx == s1.length) return 1;
      if (idx == s2.length) return -1;
      return charsOrder[s1[idx]] > charsOrder[s2[idx]] ? 1 : (charsOrder[s1[idx]] < charsOrder[s2[idx]] ? -1 : 0);
    }

    for (let letter in state.fullData) {
      state.fullData[letter].sort(function(a, b) {
        return czechSort(a.name, b.name);
      })
    };

    state['data'] = state.fullData;

    return state;
  }

  setFilter(text) {
    this.setState({
      text: text.text,
      data: this.filter(text.text.toUpperCase()),
    })
  }

  filter(text) {
    let data = {};
    for (let letter in this.state.fullData) {
      for (let idx in this.state.fullData[letter]) {
        // This is work-around because .startsWith() is not working on Android
        // https://stackoverflow.com/questions/46157252/the-difference-between-androids-string-includes-and-string-startswith
        const animalName = ' ' + this.state.fullData[letter][idx].name.toUpperCase();

        if (animalName.includes(' ' + text)) {
          if (!(letter in data)) {
            data[letter] = [];
          }
          data[letter].push(this.state.fullData[letter][idx]);
        }
      }
    }

    if (Object.keys(data).length === 0) {
      data['*'] = [{name: 'Zvíře s požadovaným jménem v aplikaci zatím chybí'}];
    }
    return data;
  }

  static navigationOptions = {
    title: 'Zvířata',
  }

  render() {
    return (
      <View
        style={{flex: 1, width: WIDTH}}
      >
        <TextInput
          style={{height: 40, textAlign: 'center', borderColor: 'gray', borderWidth: 1, backgroundColor: 'white'}}
          onChangeText={(text) => this.setFilter({text})}
          value={this.state.text}
          placeholder='Hledat'
          autoCorrect={false}
        />
        <AlphabetListView
          data={this.state.data}
          cell={Cell}
          cellProps={{navigation: this.props.navigation}}
          cellHeight={30}
          sectionListItem={SectionItem}
          sectionHeader={SectionHeader}
          sectionHeaderHeight={22.5}
          compareFunction={(a,b) => {return a.localeCompare(b); }}
        />
      </View>
    );
  }
}
