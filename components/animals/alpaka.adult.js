import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';
import DatabaseContent from '../databaseContent';

const IMAGES = [
  require('../../images/animals/alpaka/01.jpg'),
  require('../../images/animals/alpaka/02.jpg'),
  require('../../images/animals/alpaka/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/alpaka/01-thumb.jpg'),
  require('../../images/animals/alpaka/02-thumb.jpg'),
  require('../../images/animals/alpaka/03-thumb.jpg'),
];


export default class AnimalDetail extends React.Component {
  render() {
    let Element = DatabaseContent;
    return (
      <AnimalTemplate>
      <Text style={styles.mainText}>Alpaka</Text>
        <Element animalName={'alpaka'} adult={true} pole={[]}/>
      </AnimalTemplate>
    );
  }
}
