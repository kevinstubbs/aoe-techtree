import _ from 'lodash';

const SERVICE_ENDPOINT = 'http://localhost:8080';

class CivilizationService {
  fetchCivilizations () {
    return [
      {
        name: 'Celts',
        civilizationBonuses: [
          'Infantry units move 15% faster',
          'Lumberjacks work 15% faster',
          'Siege weapons fire +20% faster',
          'Enemy herdables can be converted regardless of enemy units next to them'
        ],
        teamBonuses: [
          'Siege Workshops work 20% faster'
        ],
        uniqueUnits: [
          'Woad Raider (anti-building quick infantry unit)'
        ],
        uniqueTechnologies: [
          'Stronghold (Castles and towers fire +25% faster',
          'Furor Celtica: Gives Siege Workshop units +40% HP'
        ],
      },
      {
      name: 'Aztecs',
      civilizationBonuses: [
        'Villagers carry +5 extra resources',
        'All military units are created 15% faster',
        'Monks gain 5 HP for each researched Monastery technology',
        'Start the game with +50 gold'
      ],
      teamBonuses: [
        'Relics generate 33% more gold'
      ],
      uniqueUnits: [
        'Jaguar Warrior (anti-infantry infantry)'
      ],
      uniqueTechnologies: [
        'Atlatl (Skirmishers +1 attack, +1 range)',
        'Garland Wars (+4 infantry attack)'
      ]
    },
    {
      name: 'Britons',
      civilizationBonuses: [
        'Town Centers cost -50% wood starting in the Castle Age',
        'Foot archers (except Skirmishers) have +1/+2 range in the Castle/Imperial Age',
        'Shepherds work 25% faster'
      ],
      teamBonuses: [
        'Archery Ranges work 20% faster'
      ],
      uniqueUnits: [
        'Longbowman (long-ranged archer)'
      ],
      uniqueTechnologies: [
        'Yeomen (Gives foot archers +1 range and towers +2 attack)',
        'Warwolf (Gives trebuchets blast damage and 100% accuracy against units)'
      ],
    },
    {
      name: 'Italians',
      civilizationBonuses: [
        'All dock technologies cost -50%',
        'Fishing ship cost -15 wood',
        'Gunpowder units cost -20% (technology tree states -25% but it\'s 20',
        'Advancing to the next age 15% cheaper'
      ],
      teamBonuses: [
        'Condottiero also available in allies\'s barracks in the Imperial Age'
      ],
      uniqueUnits: [
        'Genoese Crossbowman (anti-cavalry archer)',
        'Condottiero (anti-gunpowder infantry)'
      ],
      uniqueTechnologies: [
        'Pavise (foot archers +1 melee armor/+1 pierce armor)',
        'Silk Road (trade units 50% cheaper)'
      ],
    }];
  }
}

export default new CivilizationService();
