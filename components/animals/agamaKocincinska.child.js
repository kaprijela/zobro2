import React, { Component } from 'react';
import { Text,View,Image } from 'react-native';

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
  render() {
    return (
      <View style={{backgroundColor:'white'}}>
        <Text style={styles.mainText}>Agama kočinčinská</Text>
        <AnimalTemplate>    
            <DatabaseContent animalName={'agamaKocincinska'} adult={false}/>
        </AnimalTemplate>
      </View>
    );
  }
};
