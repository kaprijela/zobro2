export const scenes = {
  MAIN_MENU : 'main-menu',
  ANIMAL_DETAIL: 'animal-detail',
  ANIMAL_LIST: 'animal-list',
  EVENTS: 'events',
  ANIMAL_NEIGHBOURS: 'animal-neighbour',
  QR_READER : 'qr-scene',
  ABOUT: 'about',
  VISITORS: 'visitors',
  GAME: 'game',
  SERVICES: 'services'
}

export const sceneTitles = {
  [scenes.MAIN_MENU]: { name: scenes.MAIN_MENU, barColor: '#f6f6f6' },
  [scenes.QR_READER]: { name: scenes.QR_READER, title: 'Načíst QR kód', bgColor: '#37af54', barColor: '#3c3c3b', background: require('./images/background/qr-reader.png'), img: require('./images/qr.png')},
  [scenes.ANIMAL_LIST]: { name: scenes.ANIMAL_LIST, title: 'Zvířata', bgColor: '#2d9946', barColor: '#3c3c3b', background: require('./images/background/animal-list.png'), img: require('./images/lion.png')},
  [scenes.EVENTS]: { name: scenes.EVENTS, title: 'Krmení zvířat', bgColor: '#267f3b', barColor: '#3c3c3b', background: require('./images/background/events.png'), img: require('./images/eat.png')},
  [scenes.GAME]: {name: scenes.GAME, title: 'Šifrovací hra', bgColor: '#20642f', barColor: '#3c3c3b', background: require('./images/background/game.png'), img: require('./images/game.png')},
  [scenes.VISITORS]: {name: scenes.VISITORS,  title: 'Pro návštěvníky', bgColor: '#2d9946', barColor: '#3c3c3b', background: require('./images/background/visitors.png'), img: require('./images/people.png')},
  [scenes.SERVICES]: {name: scenes.SERVICES,  title: 'Služby', bgColor: '#267f3b', barColor: '#3c3c3b', background: require('./images/background/services.png'), img: require('./images/services.png')},
  [scenes.ABOUT]: {name: scenes.ABOUT,  title: 'O aplikaci', bgColor: '#37af54', barColor: '#3c3c3b', background: require('./images/background/about.png'), img: require('./images/info.png')},

  [scenes.ANIMAL_DETAIL]: {name: scenes.ANIMAL_DETAIL,  title: 'XXX', bgColor: 'green', barColor: '#3c3c3b' },
  [scenes.ANIMAL_NEIGHBOURS]: {name: scenes.ANIMAL_NEIGHBOURS,  title: 'Sousedi', bgColor: 'blue', barColor: '#3c3c3b' },
}
