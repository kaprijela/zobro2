import React from 'react';
import styles, { WIDTH, TEXT_COLOR, HEADER_STYLE } from '../styles/styles';

import {
  View,
  ScrollView,
  ImageBackground,
  Image,
  Linking
} from 'react-native';
import Text from '../components/animalText';
import Hyperlink from 'react-native-hyperlink';

export default class GameScene extends React.Component {
  constructor(props) {
    super(props);
  }

  _openURL(url) {
    Linking.openURL(url);
  }

  static navigationOptions = {
    title: 'Šifrovací hra',
    ...HEADER_STYLE,
  }

  render() {
    const MIN_ZOOM = 0.5;
    const MAX_ZOOM = 5.0;
    
    const PADDING = 15;
    const WIDTH_WITH_PADDING = WIDTH - PADDING;
    
    return (
      <ScrollView minimumZoomScale={MIN_ZOOM} maximumZoomScale={MAX_ZOOM}
        style={[styles.contentView, {backgroundColor: undefined}]}>
        <View style={styles.headerWithImage}>
          
          <Text style={{color: '#000000', textAlign:'center', fontSize: 30, fontWeight: '900'}}>
            Šifrovací hra
          </Text>
          <Image style={{width: "15%", height: "40%", marginTop:10,}} source={require('../images/lupa.png')}/>
        </View>
        <Text style={{color: TEXT_COLOR, backgroundColor: 'rgba(0,0,0,0)', paddingLeft : 15, paddingRight : 15,  textAlign: 'justify', marginTop:-20,}}>
          Čeká na vás spousta zábavy, cesta kolem světa, 10&nbsp;stanovišť a jedna lamí píseň.
        </Text>
        <Text style={{color: TEXT_COLOR, backgroundColor: 'rgba(0,0,0,0)', paddingTop: 15, paddingLeft : 15, paddingRight : 15, textAlign: 'justify'}}>
          Šifrovací hra je zdarma, platí se jen vstupné do zoo. Potřebujete s&nbsp;sebou dobře nabitý chytrý telefon / tablet s&nbsp;připojením na internet a tužku.
        </Text>
        <Text style={{color: TEXT_COLOR, backgroundColor: 'rgba(0,0,0,0)', paddingTop: 15, paddingLeft : 15, paddingRight : 15, textAlign: 'justify'}}>
          Start hry je na konci vstupního esíčka před Tygřími skalami.
        </Text>
        <Text style={{color: TEXT_COLOR, backgroundColor: 'rgba(0,0,0,0)', paddingTop: 15, paddingLeft : 15, paddingRight : 15, textAlign: 'justify'}}>
          Více se o&nbsp;šifrovací hře Dotkni se evoluce dozvíte na
        </Text>
        <Hyperlink onPress={() => {this._openURL('http://www.dotkni-se-evoluce.cz')}}>
          <Text style={[styles.ctext, {color: 'green', fontWeight: '800',marginTop:10, marginBottom:10,
            textAlign: 'center', backgroundColor: 'rgba(0,0,0,0)'}]}>
            www.dotkni-se-evoluce.cz
          </Text>
        </Hyperlink>
        <Text style={{color: TEXT_COLOR, backgroundColor: 'rgba(0,0,0,0)', paddingLeft : 15, paddingRight : 15}}>
          P. S.: Je to opravdu pecka! A jsme první gamifikovaná zoo v&nbsp;ČR.
        </Text>

        <Image source={require('../images/cryptomania.jpg')}
          style={{width: WIDTH_WITH_PADDING, height: 500, marginRight: 0, marginLeft: 0, marginBottom:30}}
          resizeMode='contain'/>
      </ScrollView>
    );
  }
}
