import React from 'react';
import styles from '../styles/styles';
import {WIDTH, HEIGHT,HEADER_STYLE} from '../styles/styles';

import {
  View,
  Image,
  ScrollView,
  ImageBackground
} from 'react-native';
import Text from '../components/animalText';
import ImageLabel from '../components/imageLabel';
import InPageImages from '../components/inPageImages'

export default class ServicesScene extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Zoo Brno',
    ...HEADER_STYLE,
  }

  render() {
    const MIN_ZOOM = 0.5;
    const MAX_ZOOM = 5.0;

    const PADDING = 20;
    const ICON_SIZE = 64;
    const ICON_RIGHTMARGIN = 10;

    const ICON_STYLE = {width: ICON_SIZE, height: ICON_SIZE};

    return (
        <ScrollView
          style={{backgroundColor: undefined, paddingTop:10}}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: '#000000', textAlign:'center', fontWeight: '900', fontSize: WIDTH/10}}>
              Služby
            </Text>
          </View>
            <View style={styles.headerWithImage}>
                <Text style={{color: '#000000', textAlign:'center', fontWeight: '900', fontSize: WIDTH/18,marginTop:20}}>
                  Jízda na ponících v dětské zoo
                </Text>
                <Image style={{position:'relative', alignSelf:'center', width:WIDTH/3, height:HEIGHT/8}}source={require('../images/jost5.png')}/>
           </View>
           <Text style={{fontSize:19, textAlign: 'left', alignSelf:'center', maxWidth:"80%", marginTop:10, marginBottom:20}}>
            <Text style={{color: '#446E5C', fontSize:WIDTH/20,fontWeight:'900'}}>Březen, Říjen </Text><Text style={{fontSize:WIDTH/20,}}> 10-15:30{"\n"}</Text>
            <Text style={{color: '#446E5C', fontSize:WIDTH/20, fontWeight:'900'}}>Duben-Září </Text ><Text style={{fontSize:WIDTH/20,}}>    10-17:30{"\n"}</Text>
            <Text style={{fontSize:WIDTH/20,}}>{"\n"}Cena</Text> <Text style={{color: '#446E5C', fontWeight:'900', fontSize:WIDTH/20,}}>25 Kč{"\n"}</Text>
            <Text style={{fontSize:WIDTH/20,}}>Platí mimo dny s nepříznivým počasím</Text>
          </Text>

           <View style={styles.headerWithImage}>
             <Text style={{color: '#000000', alignSelf:'center', textAlign:'justify', fontWeight: '900', fontSize: WIDTH/18}}>
                Půjčování dětských vozíků
              </Text>
              <Image style={{alignSelf:'center', width: WIDTH/6, height:HEIGHT/10}} source={require('../images/icons/vozicek.png')}/>
           </View>
          <Text style={{fontSize:WIDTH/20, textAlign:'left', alignSelf:'center', maxWidth:"80%"}}>
            Půjčování zdarma pro děti do <Text style={{fontSize:WIDTH/20, color:'#446E5C', fontWeight:'900'}}>30 </Text>kg.
          </Text>
          


          <View style={styles.headerWithImage}>
            <Text style={{color: '#000000', textAlign:'center', fontWeight: '900', fontSize: WIDTH/18}}>
              Jízda vláčkem
            </Text>
            <Image style={{alignSelf:'center', width: WIDTH/5, height: HEIGHT/10}} source={require('../images/icons/vlacek.png')}/>
          </View>

          <View style={{alignSelf:'center', maxWidth:"80%", }}>
          <Text style={{textAlign: 'left',paddingBottom: 8, maxWidth:"80%", fontSize:WIDTH/20}}>
            Od <Text style={{fontSize:WIDTH/20, color:'#446E5C', fontWeight:'900'}}>1.4.</Text> do <Text style={{fontSize:WIDTH/20, color:'#446E5C', fontWeight:'900'}}>30.4.</Text> provoz vláčku pouze o&nbsp;víkendech a svátcích.
          </Text>
          <Text style={{textAlign: 'left',paddingBottom: 8, fontSize:WIDTH/20}}>
            Od <Text style={{fontSize:WIDTH/20, color:'#446E5C', fontWeight:'900'}}>1.5.</Text> do <Text style={{fontSize:WIDTH/20, color:'#446E5C', fontWeight:'900'}}>15.9.</Text> provoz vláčku denně.
           </Text>
          <Text style={{textAlign: 'left',paddingBottom: 8, fontSize:WIDTH/20}}>
            Od <Text style={{fontSize:WIDTH/20, color:'#446E5C', fontWeight:'900'}}>16.9.</Text> do <Text style={{fontSize:WIDTH/20, color:'#446E5C', fontWeight:'900'}}>31.10.</Text> provoz vláčku pouze o&nbsp;víkendech a svátcích.
           </Text>
          <Text style={{textAlign: 'left', fontSize:WIDTH/20}}>
            Od <Text style={{fontSize:WIDTH/20, color:'#446E5C', fontWeight:'900'}}>1.11.</Text> do <Text style={{fontSize:WIDTH/20, color:'#446E5C', fontWeight:'900'}}>31.3.</Text> vláček mimo provoz.
          </Text>
          </View>

          <Text style={{textAlignVertical: 'center',
            fontWeight: '900', paddingTop: 15, fontSize: WIDTH/18, marginVertical:15, textAlign:'center'}}>
            Tohle prosím nedělejte:
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <InPageImages
              sources={[
                require('../images/icons/brusle_zakaz.png'),
                require('../images/icons/kolo_zakaz.png'),
                require('../images/icons/kolobezka_zakaz.png'),
              ]}
              style={ICON_STYLE} marginRight={ICON_RIGHTMARGIN}/>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom:100}}>
            <InPageImages
              sources={[
                require('../images/icons/odrazedlo_zakaz.png'),
                require('../images/icons/skateboard_zakaz.png'),
              ]}
              style={ICON_STYLE} marginRight={ICON_RIGHTMARGIN} />
          </View>
        </ScrollView>
    );
  }
}
