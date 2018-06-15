import React from 'react';
import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from '../styles/styles.js';
import {HEIGHT, WIDTH} from '../styles/styles.js';
import AnimalText from './animalText';
import InPageImage from './inPageImage';
import AnimalTemplate from './animalTemplate';
import {localDB} from '../index.ios.js';

var arrayOfTexts = [];
var arrayOfImagesFull = [];
var arrayOfImagesElement = [];
var arrayOfImagesThumbnails = [];
var arrayOfFacts = [];
var finalArray = [];
var img1 = require('../images/arrow.png');
var img2 = require('../images/arrowUp.png')
var actualImg = require('../images/arrow.png');;
var nameOfAnimal = "";
var tmpb = "alpaka"; //temporary name for animal
var showFact = false;
var factsStyle = {
    height: 0,
    marginTop:20,
    display: 'none',
};

export default class DatabaseContent extends React.Component {
  constructor(props) {
    super(props);
  }

  handlerButtonOnClick = () => {
    showFact = !showFact;
    if (showFact) {
      factsStyle = {
        height: HEIGHT/2,
        marginTop:20,
        maxWidth:"80%",
      };
      actualImg = img2;
    } else {
      factsStyle = {
        height: 0,
        display: 'none',
      };
      actualImg = img1;
    }
  }

   loadText = () => { // function to load informations about animal.
    localDB.get(nameOfAnimal, {attachments : true})
    .then (doc => {
        this.forceUpdate();
        arrayOfFacts = [];
        arrayOfTexts = [];
        arrayOfImagesFull = [];
        arrayOfImagesElement = [];
        arrayOfImagesThumbnails = [];
        tmp = [];
        finalArray = [];
        let counterImg = 0;
        let counterTxt = 0;

        if (this.props.adult) { // Adult version of animal
            doc.text_adult.forEach((i, idx) => {
              arrayOfTexts.push(
                <AnimalText style={{marginVertical:"10%", fontSize: HEIGHT/25, maxWidth:"80%"}} key={idx}>
                  {i}
                </AnimalText>
              )});
        }
        else { // Child version of animal
          doc.text_child.forEach((i, idx) => {
              arrayOfTexts.push(
                <AnimalText style={{marginVertical:"10%", fontSize: HEIGHT/25, maxWidth:"80%"}} key={idx}>
                  {i}
                </AnimalText>
              )});
        }

        doc.images.forEach((i,idx) => { //get images from localDB
          arrayOfImagesFull.push( // image in full resolution
            i.full
            );
          arrayOfImagesThumbnails.push( // thumbnail 
            i.thumbnail
            );

          arrayOfImagesElement.push( // add elements of image to the array
              <InPageImage key={(arrayOfTexts.length + idx)} indexes={[idx]} thumbnails={arrayOfImagesThumbnails} images={arrayOfImagesFull} navigator={this.props.navigator} />
            );
        });

        doc.facts.forEach((i, idx) => { // get facts of animal
          tmp.push(
            <Text style={{fontSize: HEIGHT/30}} key={idx+200}>{'\u2022'} {i}</Text>
            );
        });

        arrayOfFacts.push(<ScrollView style = {factsStyle}>{tmp}</ScrollView>); //add Box of facts
        arrayOfFacts.push(<TouchableOpacity onPress={this.handlerButtonOnClick}><Image style={{top:10, alignSelf:'center', marginBottom: 25}} source={actualImg}/></TouchableOpacity>);
        
        finalArray = finalArray.concat(arrayOfFacts);

        while (true) { // zip texts with images. In order : Image, text, image, text ....

          if (counterImg < arrayOfImagesElement.length) {
            finalArray.push(arrayOfImagesElement[counterImg]);
            counterImg++;
          }
          if (counterTxt < arrayOfTexts.length) {
            finalArray.push(arrayOfTexts[counterTxt]);
            counterTxt++;
          } 
          if ((counterImg === arrayOfImagesElement.length) && (counterTxt === arrayOfTexts.length)) {
            break;
          }
        }
    });
    if (!arrayOfTexts.length) { // return info text if it's loading data from localDB.
      return (
        <Text style={{alignSelf:'center', marginTop: "25%", fontWeight: '800',flex:1, fontSize: 20}}>
          Načítavam
        </Text>
        )
    }
    return finalArray;
  }

  render() {

    if (this.props.animalName == tmpb){
      nameOfAnimal = this.props.animalName;
    }
    tmpb = this.props.animalName;

    return (
      <AnimalTemplate>
        <Text style={{marginTop:20, fontWeight:'900', fontSize:HEIGHT/20, alignSelf:'center'}}>Základní informace</Text>
        {this.loadText()}
      </AnimalTemplate>
    );
  }
}
