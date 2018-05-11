import React from 'react';
import styles from '../styles/styles';
import {WIDTH, HEADER_STYLE} from '../styles/styles';

import {
  View,
  Image,
  ScrollView,
  ImageBackground
} from 'react-native';
import Text from '../components/animalText';

export default class VisitorsScene extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Pro návštěvníky',
    ...HEADER_STYLE,
  }

  render() {
    const MIN_ZOOM = 0.5;
    const MAX_ZOOM = 5.0;

    return (
        <ScrollView minimumZoomScale={MIN_ZOOM} maximumZoomScale={MAX_ZOOM}
         style={[styles.contentView, {backgroundColor: undefined}]}>
         <View style={styles.headerWithImage}>
          <Text style={{fontWeight: '900', paddingTop: 10, textAlign:'center', fontSize: 22}}>
            Kdy máme otevřeno?
          </Text>
          <Image style={{width: "20%", height: "90%", top:-5}} source={require('../images/orloj.png')}/>
        </View>

          <View style={{flexDirection: 'row', marginTop:15}}>
            <View style={{flex: 1}} />
            <Text style={{textAlign: 'left', color:'#446E5C', fontWeight:'700', flex: 2}}>
              Listopad-Únor{"\n"}
              Březen, Říjen{"\n"}
              Duben-Září
            </Text>
            <Text style={{textAlign: 'right', flex: 1}}>
              9-16{"\n"}
              9-17{"\n"}
              9-18
            </Text>
          <View style={{flex: 1}} />
          </View>


          <View style={styles.headerWithImage}>
            <Text style={{fontWeight: '900', paddingTop: 20, textAlign:'center', fontSize: 22}}>
              Jak se k nám dostat?
            </Text>
            <Image style={{width: "20%", height: "60%", marginTop:5,}} source={require('../images/icons/tramvaj.png')}/>
          </View>
          <View style={{flexDirection: 'row', marginTop:10}}>
            <View style={{flex: 1}} />
            <Text style={{color:'#446E5C', fontWeight:'700',textAlign: 'left', flex: 2}}>
              Trolejbus{"\n"}
              Tramvaj{"\n"}
              Autobus
            </Text>
            <Text style={{textAlign: 'left', flex: 1.5}}>
              30{"\n"}
              1, 3, 11{"\n"}
              50, 52, 54
            </Text>
            <View style={{flex: 1}} />
          </View>

          <View style={styles.headerWithImage}>
            <Text style={{fontWeight: '900', paddingTop: 10, textAlign:'center', fontSize:22}}>
              Jak se s námi spojit?
            </Text>
            <Image style={{width: "20%", height: "60%", marginTop:10,}} source={require('../images/icons/telefon.png')}/>
          </View>
         
          <Text style={{textAlign: 'center', marginTop:10}}>
            zoo@zoobrno.cz {"\n"}
            546 432 311
          </Text>
          <Text style={{textAlign: 'center', paddingTop: 40, paddingBottom: 100, fontWeight:'700'}}>
            Zoo Brno a stanice zájmových činností, příspěvková organizace {"\n"}
            U Zoologické zahrady 46 {"\n"}
            635 00 Brno
          </Text>
         </ScrollView>
    );
  }
}
