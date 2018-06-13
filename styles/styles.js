import {StyleSheet} from 'react-native';
import Dimensions from 'Dimensions';

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;
const ANIMAL_RIGHT_BORDER = 12;

const backgroundColors = [
      '#37af54',
      '#2d9946',
      '#267f3b',
      '#20642f',
      '#267f3b',
      '#2d9946',
];

export const TEXT_COLOR = 'black';
export const HEADER_STYLE = {
  headerTintColor: '#FFFFFF',
  headerStyle: {
  backgroundColor: '#446E5C',
  }
};

const styles = {
  headerWithImage:{
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  boxIm: {
    width: "65%",
    height: "65%",
  },
  box: {
    height:"100%",
    width:"32%",
    alignItems:'center',
  },
  boxes: {
    flexDirection: 'row',
    height:"30%",
    alignSelf:'center',
    marginTop:"10%",
  },
  obrazok: {
    position:'absolute',
    bottom:0,
    right:0,
    left:0,
    top:0,
    height:"100%",
    width:WIDTH,
  },
  obrazokInfo: {
    width:"20%",
    alignSelf:'center',
    maxHeight:HEIGHT/20,
  },
  container: {
    flex:1,
  },
  nadpis: {
    color: '#FFFFFF',
    fontSize: HEIGHT/10,
    fontWeight: '900',
    textAlign: 'left',
    textAlign:'left',
    marginTop:"10%",
    marginLeft:"15%",
  },

  nadpis2: {
    color: 'white',
    fontSize:HEIGHT/10,
    fontWeight: '900',
    textAlign: 'left',
    textAlign:'left',
    marginTop: -10,
    marginLeft:"15%",
  },

  firstBox: {
    backgroundColor: "#7DC383",
    height:HEIGHT/2,
    width:WIDTH,
  },
  secondBox: {
    backgroundColor: "#446E5C",
    height:"50%",
    width:"100%",
    alignSelf:'center',

  },
  infoBox: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    alignItems:'center',
    flexDirection: 'row',
    width: "33%",
    maxHeight:40,
  },
  mainText: {
    fontSize:30,
    fontWeight:'900',
    textAlign:'center',
    marginVertical: 20,
  },
  popis: {
    color: 'white',
    fontSize: WIDTH/25,
    fontWeight: '800',
    textAlign:'center',
    alignSelf:'center',
    width:"100%",
  },
  popis2: {
    color: 'white',
    fontSize: WIDTH/30,
    fontWeight: '800',
    textAlign:'center',
    alignSelf:'center',
    width:"80%",
  },
  text: {
    fontSize: 18,
    color: TEXT_COLOR,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  italic: {
    fontSize: 18,
    color: TEXT_COLOR,
    fontStyle: 'italic',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  strong: {
    fontSize: 18,
    color: TEXT_COLOR,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0)'
  },

  contentView: {
    backgroundColor: 'white',
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 10,
  },
  eventItemText: {
    fontSize: 22,
    color: '#e6e5eb',
  },
  eventButton: {
    flex: 1,
    padding: 15,
    height: 60,
    justifyContent: 'center',
    borderWidth: 2,
    backgroundColor: 'white',
  },
  eventButtonText: {
    fontSize: 22,
    fontWeight: '300',
    textAlign: 'center',
    color: 'black',
  },
  tabIcons: {
    width: 32,
    height: 32,
  },

  mainMenuItem: {
    height: 80,
    width: WIDTH,
    justifyContent: 'center',
  },
  mainMenuItemText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#e6e5eb',
  },
  eventItem: {
    height: 80,
    width: WIDTH,
  },
  eventItemText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  eventItemTextTime: {
    fontSize: 22,
    color: '#000',
  },
  scrollView: {
    backgroundColor: 'white',
    alignItems:'center',
  },
  ctext: {
    fontSize: 18,
    color: TEXT_COLOR,
    paddingTop: 5,
    paddingBottom: 5,
  },
  ctextItalic: {
    fontSize: 18,
    color: TEXT_COLOR,
    fontStyle: 'italic',
  },
  italic: {
    fontSize: 18,
    color: TEXT_COLOR,
    fontStyle: 'italic',
  },
  strong: {
    fontSize: 18,
    color: TEXT_COLOR,
    fontWeight: 'bold',
  },
  inPageSingleThumbnail: {
    height: 20*HEIGHT/100,
    width: 80 * WIDTH/100,
    alignSelf:'center',
  },
  inPageDuoThumbnailLeft: {
    height: 100,
    width: (WIDTH - ANIMAL_RIGHT_BORDER - 10)/ 2,
    marginRight: 10,
  },
  inPageDuoThumbnailRight: {
    height: 100,
    width: (WIDTH - ANIMAL_RIGHT_BORDER - 10) / 2,
    marginRight: 12,
  },
  otherFontNavBar: {
    color: '#e6e5eb',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mainMenuFontNavBar: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 34,
  }
};

export default styles;
