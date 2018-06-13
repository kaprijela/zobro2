import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';
import DatabaseContent from '../databaseContent';

const IMAGES = [
  require('../../images/animals/agamaKocincinska/01.jpg'),
  require('../../images/animals/agamaKocincinska/02.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/agamaKocincinska/01-thumb.jpg'),
  require('../../images/animals/agamaKocincinska/02-thumb.jpg'),
];

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
          height: "6%",
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
      <View style={{backgroundColor:'white'}}>
        <Text style={styles.mainText}>Agama kočinčinská</Text>
        <AnimalTemplate>
            <View style={_style}>
              <Text style={{marginTop:20, fontSize: 18}}>
                {'\u2022'} <Text style={{fontWeight:'800'}}>Délka:</Text> 25 - 30 cm{"\n"}
                {'\u2022'} <Text style={{fontWeight:'800'}}>Kmen:</Text> strunatci (Chordata){"\n"}
                {'\u2022'} <Text style={{fontWeight:'800'}}>Rod:</Text> agama (Physignathus){"\n"}
                {'\u2022'} <Text style={{fontWeight:'800'}}>Klade:</Text>  6-18 bílých vajec{"\n"}
              </Text>
            </View>
            <TouchableOpacity onPress={this.handlerButtonOnClick}><Image style={{top:10, alignSelf:'center', marginBottom: 20}} source={actualImg}/></TouchableOpacity>
            
            <DatabaseContent animalName={'agamaKocincinska'} adult={true}/>
        </AnimalTemplate>
      </View>
    );
  }
};
