import React from 'react';
import styles, { WIDTH, HEIGHT } from '../styles/styles';

import Accordion from 'react-native-collapsible/Accordion';
import PushNotification from 'react-native-push-notification';
import {localDB} from '../index.ios.js';
import {
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  ImageBackground,
  Alert
} from 'react-native';

import Text from '../components/animalText';
import events from '../events.js';

var _this = null;
var eevents = [];
var filteredEvents = [];
var finall = [];


export default class EventScene extends React.Component {
  constructor(props) {
    super(props);

    PushNotification.configure({
      onNotification: function(notification) {
            Alert.alert(notification.message);
        },

        permissions: {
            alert: true,
            badge: false,
            sound: true
        },
    });
  }

  isTimeSelected(time) {
    if (time === this.state.selectedTime) {
      return {backgroundColor: '#3cac54'};
    } else {
      return null;
    }
  }

  _renderHeader(section, index) {
    return (
      <ImageBackground
        source={section.thumbnail}
        style={{width: "100%", height: (HEIGHT*15/100)}}
      >
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#6A9C78B0',
            height:"100%",
          }}
          ref={(component) => {
            if (!(_this.eventHeader.includes(component)) && (component !== null)) {
              _this.eventHeader.push(component);
            }
          }}
        >
          <Text style={[styles.eventItemText, {fontWeight: 'bold'}]}>
            {section.name}
          </Text>
          <Text style={styles.eventItemText}>dnes, {section.time}</Text>
        </View>
      </ImageBackground>
    );
  }

  _renderContent(event) {
    return (
      <View style={{borderWidth: 1, borderColor:'black',backgroundColor: '#fff', width:"90%", alignSelf:'center', alignItems:'center', marginVertical: 10}}>
        <Image
          resizeMode='contain'
          source={`${event.thumbnail}`}
          style={{width: "100%", height: 120, marginTop:10 }}
        />
        <Text style={{fontSize: 22, paddingBottom: 20, paddingTop: 20,
          color: 'black', fontWeight:'bold', textAlign: 'center'}}>
          {event.place}
        </Text>
        <Text style={{fontSize: 16, width: "80%", textAlign: 'center',
          paddingBottom: 20, paddingTop: 20, color: 'black'}}>
          Chcete být upozorněni na začátek krmení?
        </Text>
        <View style={{flexDirection: 'row', width:'95%', marginBottom:10}}>
          <TouchableHighlight underlayColor="#aaaaaa" style={[styles.eventButton, _this.styleEvent(event, 5)]} 
            onPress={() => _this.toggleEvent(event, 5)}>
            <View style={{alignItems:'center', alignSelf:'center'}}>
              <Text>5</Text>
              <Text>minut</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#aaaaaa" style={[styles.eventButton, _this.styleEvent(event, 10)]}
            onPress={() => _this.toggleEvent(event, 10)}>
            <View style={{alignItems:'center', alignSelf:'center'}}>
              <Text>10</Text>
              <Text>minut</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#aaaaaa" style={[styles.eventButton, _this.styleEvent(event, 15)]}
            onPress={() => _this.toggleEvent(event, 15)}>
            <View style={{alignItems:'center', alignSelf:'center'}}>
              <Text>15</Text>
              <Text>minut</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  }

  toggleEvent(zooEvent, deltaTime) {
    if (this.checkEventNotification(zooEvent, deltaTime)) {
      this.props.removeNotification(zooEvent, deltaTime);
      PushNotification.cancelLocalNotifications(
        { id: this._createNotificationID(zooEvent, deltaTime)}
      );
    } else {
      const deltas = [5, 10, 15];
      // @todo: fix - android issue, ID have to be integer
      // remove notifications for same zooEvent but different deltaTime
      deltas.forEach((value) => {
          PushNotification.cancelLocalNotifications(
            { id: this._createNotificationID(zooEvent, value)}
          );
      });

      // add new local notification
      let fireTime = new Date(Date.now());
      const p = zooEvent.time.split(':');
      fireTime.setHours(p[0]);
      fireTime.setMinutes(p[1]);
      fireTime.setSeconds(0);

      let z = {
        id: this._createNotificationID(zooEvent, deltaTime),
        vibrate: true,
        message: (zooEvent.name + '\n' + zooEvent.place + '\n' + zooEvent.time),
        userInfo: {id: this._createNotificationID(zooEvent, deltaTime)},
        // @fix: this is for testing purposes; run alarm in 10 seconds
//        date: new Date(Date.now() + 1000 * 10),
        date: new Date(fireTime - ((deltaTime + 0) * 60 * 1000)),
      };
      PushNotification.localNotificationSchedule(z);

      this.props.addNotification(zooEvent, deltaTime)
    }
  }

  checkEventNotification(zooEvent, deltaTime) {
    return (this.props.notifications[zooEvent.id] === deltaTime);
  }

  _createNotificationID(zooEvent, deltaTime) {
    const x = 100 * 1 * zooEvent.nid;
    return x.toString();
  }

  _onEventChange(newIndex) {
    const HEIGHT_HEADER = 80;

    for (headerIndex in _this.eventHeader) {
      if (('' + headerIndex) === ('' + newIndex)) {

      }
    }
  }

  styleEvent(zooEvent, deltaTime) {
    if (this.checkEventNotification(zooEvent, deltaTime)) {
      return ({
        backgroundColor: '#3cac54',
      });
    } else {
      return ({
      });
    }
  }

  loadEvents = () => { 
    localDB.get('events', {attachments : true})
     .then (doc => {
              this.forceUpdate();
              eevents = [];
              finall = [];
              doc.feeding_events.forEach((i) => {
                  eevents.push(i);
              });

      const currentDate = new Date();
      const SHOW_RUNNING = 30;
      filteredEvents = eevents.filter((event) => {
        console.log(event);
        const matchingDay = event['weekdays'].includes(currentDate.getDay());
        const eventHour = event['time'].split(":")[0];
        const eventMinutes = event['time'].split(":")[1];
        const eventTime = 60 * parseInt(eventHour) + parseInt(eventMinutes) + SHOW_RUNNING;
        const currentTime = 60 * currentDate.getHours() + currentDate.getMinutes();

        const startDate = new Date(event.start_date); // include this day
        const endDate = new Date(event.end_date);  // do not include this day

        const result = (
            matchingDay &&
            (eventTime >= currentTime) &&
            (+startDate <= +currentDate) &&
            (+endDate > +currentDate)
          );
        return result;
    });

    filteredEvents.sort((a,b) => {
      if (a.time < b.time) {
        return -1;
      } else if (a.time > b.time) {
        return 1;
      } else {
        return 0;
      }
    });
      if (filteredEvents.length === 0)
          {
            finall.push(
            <View style={[styles.eventItem, {flex:1, flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0)'}]}>
              <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.eventItemText}>Je nám líto,</Text>
                <Text style={styles.eventItemTextTime}>dnes už jsme nakrmení.</Text>
              </View>
            </View>);
          }
          else {
            finall.push(
            <ScrollView>
              <Accordion
                sections={filteredEvents}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
                onChange={this._onEventChange}
              />
            </ScrollView>);
          }
      
    });

    return finall;
  }

  render() {
    _this = this;
    _this.eventHeader = [];
    console.log(this.loadEvents());
    return (
    <View style={{flex: 1, width: WIDTH}}>{this.loadEvents()}</View>
    );
  }
}
