import React from 'react';
import { AppRegistry } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import AppReducer from './reducers';
import AppWithNavigationState from './navigation';
import { scenes } from './scenes';
import {setAnimalTab, setSelectedAnimal} from './actions';

export const localDB = new PouchDB('myDB');
const remoteDB = new PouchDB('https://admin:e6b5153cd4cb@couchdb-1c5578.smileupps.com/animals');

localDB.replicate.from(remoteDB);

export var animals = [];

localDB.get('animals', {attachments : true}) // get list of animals
    .then (doc => {animals.push(doc.animals)});

export default class Zobro2App extends React.Component {
  store = createStore(AppReducer);

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState onNavigationStateChange={(prevState, currentState) => {
          if (currentState.routes[currentState.index].routeName === scenes.ANIMAL_DETAIL) {
            this.store.dispatch(setSelectedAnimal(currentState.routes[currentState.index].params.animal));
            this.store.dispatch(setAnimalTab('Text'));
          }
        }} />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('zobro2', () => Zobro2App);
