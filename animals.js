import adult from './components/databaseContent.js';
import child from './components/databaseContent.child.js';

export default animalDb = {
  'tygrSumatersky': {
    name: 'Tygr sumaterský',
    contentAdult: adult,
    contentChild: child,
    animal: 'tygrSumatersky',
    neighbours: [
      {animal: 'tygrSumatersky', direction: 'front'},
      {animal: 'rosomakSibirsky', direction: 'right'},
      {animal: 'soviceSnezni', direction: 'right'},
    ],
    img : require('./images/animals/tygrSumatersky/01-thumb.jpg'),
  },

  'medvedKamcatsky': {
    name: 'Medvěd kamčatský',
    contentAdult: adult,
    contentChild: child,
    animal: 'medvedKamcatsky',
    neighbours: [
      {animal: 'medvedKamcatsky', direction: 'front'},
      {animal: 'lachtanMedvedi', direction: 'left'},
      {animal: 'manul', direction: 'left'},
      {animal: 'rosomakSibirsky', direction: 'right'},
    ],
    img : require('./images/animals/medvedKamcatsky/01-thumb.jpg'),
  },

  'rosomakSibirsky' : {
    name: 'Rosomák sibiřský',
    contentAdult: adult,
    contentChild: child,
    animal: 'rosomakSibirsky',
    neighbours: [
      {animal: 'rosomakSibirsky', direction: 'front'},
      {animal: 'tygrSumatersky', direction: 'left'},
      {animal: 'medvedKamcatsky', direction: 'right'},
    ],
    img : require('./images/animals/rosomakSibirsky/01-thumb.jpg'),
  },

  'medvedLedni' : {
    name: 'Medvěd lední',
    contentAdult: adult,
    contentChild: child,
    animal: 'medvedLedni',
    neighbours: [
      {animal: 'medvedLedni', direction: 'front'},
      {animal: 'rysKanadsky', direction: 'left'},
      {animal: 'orelVychodni', direction: 'back'},
    ],
    img : require('./images/animals/medvedLedni/01-thumb.jpg'),
  },

  'jerabMandzusky' : {
    name: 'Jeřáb mandžuský',
    contentAdult: adult,
    contentChild: child,
    animal: 'jerabMandzusky',
    neighbours: [
      {animal: 'jerabMandzusky', direction: 'front'},
      {animal: 'myvalSeverni', direction: 'left'},
      {animal: 'pustikBelavy', direction: 'right'},
    ],
    img : require('./images/animals/jerabMandzusky/01-thumb.jpg'),
  },

  'soviceSnezni' : {
    name: 'Sovice sněžní',
    contentAdult: adult,
    contentChild: child,
    animal: 'soviceSnezni',
    neighbours: [
      {animal: 'soviceSnezni', direction: 'front'},
      {animal: 'tygrSumatersky', direction: 'left'},
      {animal: 'jespakBojovny', direction: 'right'},
      {animal: 'tenkozobecOpacny', direction: 'right'},
      {animal: 'ustricnikVelky', direction: 'right'},
      {animal: 'kulikPisecny', direction: 'right'},

    ],
    img : require('./images/animals/soviceSnezni/01-thumb.jpg'),
  },

  'jespakBojovny' : {
    name: 'Jespák bojovný',
    contentAdult: adult,
    contentChild: child,
    animal: 'jespakBojovny',
    neighbours: [
      {animal: 'jespakBojovny', direction: 'front'},
      {animal: 'tenkozobecOpacny', direction: 'front'},
      {animal: 'ustricnikVelky', direction: 'front'},
      {animal: 'kulikPisecny', direction: 'front'},
      {animal: 'soviceSnezni', direction: 'left'},
      {animal: 'lachtanMedvedi', direction: 'right'},
    ],
    img : require('./images/animals/jespakBojovny/01-thumb.jpg'),
  },

  'alpaka' : {
    name: 'Alpaka',
    contentAdult: adult,
    contentChild: child,
    animal: 'alpaka',
    neighbours: [
      {animal: 'alpaka', direction: 'front'},
      {animal: 'kozorozecSibirsky', direction: 'right'},
      {animal: 'pekariBelobrady', direction: 'right'},
      {animal: 'vikuna', direction: 'left'},
    ],
    img : require('./images/animals/alpaka/01-thumb.jpg'),
  },
};
