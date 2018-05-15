import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import {localDB} from '../../scenes/menuScene'
import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/agamaKocincinska/01.jpg'),
  require('../../images/animals/agamaKocincinska/02.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/agamaKocincinska/01-thumb.jpg'),
  require('../../images/animals/agamaKocincinska/02-thumb.jpg'),
];

console.log('ewer')

export default class AnimalDetail extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
        myText: null,
        onClicked: false,
        download : false,
        img: null}
    this.handlerButtonOnClick = this.handlerButtonOnClick.bind(this);
  }


  handlerButtonOnClick(){
    if (this.state.onClicked) {
      this.setState({
         onClicked: false
      });
    } else {
      this.setState({
         onClicked: true
      });
    }
  }


  render() {
    var _style;
    var img1 = require('../../images/arrow.png');
    var img2 = require('../../images/arrowUp.png')
    var actualImg = require('../../images/arrow.png');;
    if (this.state.onClicked){ // clicked button style
      _style = {
          height: "10%",
        }
        actualImg = img2
    }
    else{ // default button style
      _style = {
          height: 0,
        }
      actualImg = img1
    }
    return (
      <View style={{backgroundColor:'white', paddingBottom:50}}>
        <Text style={styles.mainText}>Agama kočinčinská</Text>
        <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
            <View style={_style}>
              <Text style={{marginTop:20, fontSize: 18}}>
                {'\u2022'} <Text style={{fontWeight:'800'}}>Délka:</Text> 25 - 30 cm{"\n"}
                {'\u2022'} <Text style={{fontWeight:'800'}}>Kmen:</Text> strunatci (Chordata){"\n"}
                {'\u2022'} <Text style={{fontWeight:'800'}}>Rod:</Text> agama (Physignathus){"\n"}
                {'\u2022'} <Text style={{fontWeight:'800'}}>Klade:</Text>  6-18 bílých vajec{"\n"}
              </Text>
              <TouchableOpacity onPress={this.handlerButtonOnClick}><Image style={{top:10, alignSelf:'center'}} source={actualImg}/></TouchableOpacity>
            </View>
          <AnimalText style={{marginVertical:"10%"}}>
            {this.state.myText}
          </AnimalText>
          
          <Image style={{alignSelf:'center', width: "100%", height: 100}} source={{uri: `${this.state.img}`}}/>
          <AnimalText style={{marginVertical:"10%"}}>
            Agamy kočinčinské obývají jihovýchod Asie, oblast takzvané Kočinčíny, tedy jih Vietnamu. Kromě toho je možné je potkat v&nbsp;Číně, Thajsku a Laosu. Žijí na místech, kde je vlhko a teplo – pro milovníky čísel to znamená až 80% vlhkost a teploty 29&nbsp;±&nbsp;3&nbsp;°C. V&nbsp;takovýchto oblastech pobývají u&nbsp;vody na keřích nebo malých stromech. K&nbsp;nebezpečí se agamy otáčejí zády – vrhají se do vody, ve které jsou jako doma, a dovedou se potápět na desítky minut.
          </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          
          <Image style={{top:10, alignSelf:'center'}}source={require('../../images/paci.png')}/>
          
          <AnimalText style={{marginTop:"10%"}}>
            Co se potravy týče, nejčastěji si agamy pochutnávají na hmyzu. Čas od času si smlsnou i&nbsp;na drobných obratlovcích včetně ryb. Jen výjimečně okoštují i&nbsp;něco zeleného, většině agam totiž vegetariánství dvakrát nevoní. A proč by také mělo, když mají předpoklady k&nbsp;tomu být vynikajícími lovci – kromě plavání dokážou agamy také utíkat pouze po zadních nohou.
          </AnimalText>
          <Image style={{top:10, alignSelf:'center'}}source={require('../../images/paci.png')}/>
          <AnimalText style={{marginTop:"10%"}}>
            V&nbsp;naší zoo žije jeden sameček a dvě samičky. Samečka lze poznat podle toho, že je barevnější, má na hřbetě větší hřeben a má žlutooranžově zbarvený spodek krku. Jinak jsou všechny agamy svrchu zelené, trochu do hněda a mají světlá bříška. (Mimochodem, hřeben mají i samičky; samečci je do něj kousají během kopulace.)
          </AnimalText>
          <Image style={{top:10, alignSelf:'center'}}source={require('../../images/paci.png')}/>
          <AnimalText style={{marginTop:"10%"}}>
            Agamy jsou vejcorodé. Snůšku kladou samičky do jamky v&nbsp;zemi, mláďata se líhnou po dvou až dvou a půl měsících, záleží na okolní teplotě. Délka života agam je 10–15 let.
          </AnimalText>
          <Image style={{top:10, alignSelf:'center'}}source={require('../../images/paci.png')}/>
          <AnimalText style={{marginTop:"10%"}}>
            A zajímavost na závěr: Agamy mají tři oči. Na temeni hlavy, mezi „normálníma“ očima, mají skvrnu, tzv. pineální oko, kterým vnímají změny intenzity světla. To jim jednak pravděpodobně pomáhá s&nbsp;termoregulací (slouží pro nalezení místa k&nbsp;vyhřívání) a jednak je chrání před nebezpečím. Spící agamy totiž tímto okem pravděpodobně dokážou poznat rozdíl v&nbsp;intenzitě světla, když nad nimi například letí dravec.
          </AnimalText>
        </AnimalTemplate>
      </View>
    );
  }
};
