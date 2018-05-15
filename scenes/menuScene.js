import React from 'react';
import styles, { WIDTH } from '../styles/styles';
import PouchDB from 'pouchdb-react-native'
import {scenes, sceneTitles} from '../scenes';

import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export const localDB = new PouchDB('myDB')
const remoteDB = new PouchDB('https://admin:e5b4b424b1cb@couchdb-616f08.smileupps.com/animals')

localDB.replicate.from(remoteDB, {live: true});  

class MainMenuItem extends React.Component {
  constructor(props) {
      super(props);
  }


  render() {
    const bgColor = sceneTitles[this.props.scene].bgColor;
    const title = sceneTitles[this.props.scene].title;
    const imageName = sceneTitles[this.props.scene].img; 



    return (

      <TouchableOpacity
         style={styles.box}
         onPress={() => {this.props.navigation.navigate(sceneTitles[this.props.scene].name, {animal: 'tygrSumatersky'})}}
         >
              <Image style={styles.boxIm} source={imageName}/>
              <Text style={styles.popis}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

export default class MenuScene extends React.Component {
  constructor(props) {
      super(props);
  }

  static navigationOptions = {
    header: null,
  }

  render() {

    const menuItems1 = [scenes.ANIMAL_LIST, scenes.EVENTS,scenes.QR_READER];

    const menuItems2 = [scenes.GAME, scenes.SERVICES, scenes.VISITORS];

    return (
      <View style={styles.container}>
        <View style={styles.firstBox}>
              <Text style={styles.nadpis}>
                  Zoo
              </Text>
              <Text style={styles.nadpis2}>
                 Brno
              </Text>
              <Image style={styles.obrazok} source={require('../images/brno8.png')}/>
        </View>

        <View style={styles.secondBox}>

            <View style={styles.boxes}>

                     {
                      menuItems1.map((itemInMenu, index) => (
                        <MainMenuItem
                          key={index}
                          scene={itemInMenu}
                          navigation={this.props.navigation}
                        />
                      ))
                    }
              
            </View>

             <View style={styles.boxes}>

                    {
                      menuItems2.map((itemInMenu, index) => (
                        <MainMenuItem
                          key={index}
                          scene={itemInMenu}
                          navigation={this.props.navigation}
                        />
                      ))
                    }
            </View>

            <TouchableOpacity
             style={styles.infoBox}
             onPress={() => {this.props.navigation.navigate(sceneTitles[scenes.ABOUT].name, {animal: 'tygrSumatersky'})}}
             >
                <Image style={styles.obrazokInfo} source={require('../images/info.png')}/>
                <Text style={styles.popis}> O aplikacií</Text>
            </TouchableOpacity>

        </View>
      </View>
    );
  }
}
