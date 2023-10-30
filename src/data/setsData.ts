export interface SetsDataProps {
  setIndex: string,
  fighters: string[],
  battlefields: {battlefieldId: string, battlefieldPlayers: number}[],
  ru?: boolean
}

export interface BattlefieldProps {
  battlefieldId: string, 
  battlefieldPlayers: number
}

export const setImgPath = 'https://storage.googleapis.com/randomatched/test';

export const allSetsArray: SetsDataProps[] = [
  {
    setIndex: '1',
    fighters: ['1', '2', '3', '4'],
    battlefields: [
      {
        battlefieldId: '1',
        battlefieldPlayers: 4
      },
      {
        battlefieldId: '2',
        battlefieldPlayers: 4
      },
    ],
    ru: true
  },
  {
    setIndex: '2',
    fighters: ['5'],
    battlefields: [],
    ru: false
  },
  {
    setIndex: '3',
    fighters: ['6', '7'],
    battlefields: [
      {
        battlefieldId: '3',
        battlefieldPlayers: 2
      },
      {
        battlefieldId: '4',
        battlefieldPlayers: 2
      },
    ],
    ru: true
  },
  {
    setIndex: '4',
    fighters: ['8', '9'],
    battlefields: [
      {
        battlefieldId: '5',
        battlefieldPlayers: 2
      }
    ],
    ru: false
  },
  {
    setIndex: '5',
    fighters: ['10', '11', '12', '13'],
    battlefields: [
      {
        battlefieldId: '6',
        battlefieldPlayers: 4
      },
      {
        battlefieldId: '7',
        battlefieldPlayers: 4
      },
    ],
    ru: true
  },
  {
    setIndex: '6',
    fighters: ['14', '15', '16', '17'],
    battlefields: [
      {
        battlefieldId: '8',
        battlefieldPlayers: 4
      },
      {
        battlefieldId: '9',
        battlefieldPlayers: 4
      },
    ],
    ru: false
  },
  {
    setIndex: '7',
    fighters: ['18', '19'],
    battlefields: [
      {
        battlefieldId: '10',
        battlefieldPlayers: 2
      }
    ],
    ru: true
  },
  {
    setIndex: '8',
    fighters: ['20'],
    battlefields: [],
    ru: false
  },
  {
    setIndex: '9',
    fighters: ['21', '22', '23', '24'],
    battlefields: [
      {
        battlefieldId: '11',
        battlefieldPlayers: 4
      }
    ],
    ru: true
  },
  {
    setIndex: '10',
    fighters: ['25', '26', '27'],
    battlefields: [
      {
        battlefieldId: '12',
        battlefieldPlayers: 4
      }
    ],
    ru: false
  },
  {
    setIndex: '11',
    fighters: ['28', '29', '30'],
    battlefields: [
      {
        battlefieldId: '13',
        battlefieldPlayers: 4
      },
    ],
    ru: false
  },
  {
    setIndex: '12',
    fighters: ['31', '32'],
    battlefields: [
      {
        battlefieldId: '14',
        battlefieldPlayers: 2
      }
    ],
    ru: false
  },
  {
    setIndex: '13',
    fighters: ['33', '34'],
    battlefields: [
      {
        battlefieldId: '15',
        battlefieldPlayers: 2
      }
    ],
    ru: true
  },
  {
    setIndex: '14',
    fighters: ['35', '36', '37'],
    battlefields: [
      {
        battlefieldId: '16',
        battlefieldPlayers: 4
      }
    ],
    ru: false
  },
  {
    setIndex: '15',
    fighters: ['38', '39', '40'],
    battlefields: [
      {
        battlefieldId: '17',
        battlefieldPlayers: 4
      }
    ],
    ru: false
  },
  {
    setIndex: '16',
    fighters: ['41', '42', '43'],
    battlefields: [
      {
        battlefieldId: '18',
        battlefieldPlayers: 4
      }
    ],
    ru: false
  },
  {
    setIndex: '17',
    fighters: ['44', '45', '46', '47'],
    battlefields: [
      {
        battlefieldId: '19',
        battlefieldPlayers: 4
      },
      {
        battlefieldId: '20',
        battlefieldPlayers: 4
      }
    ],
    ru: false
  },
]

export const ruFightersData: string[] = allSetsArray.filter((set) => set.ru).map((set) => set.fighters).flat(1);
export const allFightersData: string[] = allSetsArray.map((set) => set.fighters).flat(1);

export const ruBattlefieldsData: BattlefieldProps[] = allSetsArray.filter((set) => set.ru).map((set) => set.battlefields).flat(1);
export const allBattlefieldsData: BattlefieldProps[] = allSetsArray.map((set) => set.battlefields).flat(1);

export const ruSetsData: string[] = allSetsArray.filter((set) => set.ru).map((set) => set.setIndex).flat(1);
export const allSetsData: string[] = allSetsArray.map((set) => set.setIndex);