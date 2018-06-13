import React from 'react';
import PropTypes from 'prop-types'
import { View } from 'react-native';
import styles from '../styles/styles';
import InPageImage from './inPageImage';

export default class AnimalTemplate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={styles.scrollView}>
          {this.props.children}
        </View>
    );
  }
};
