export interface SetsDataProps {
  setId: string,
  fighters: string[],
  battlefields: {battlefieldId: string, battlefieldPlayers: number}[],
  ru?: boolean
}

export const imgPathSet = 'https://storage.googleapis.com/randomatched/sets/';

export const setsData: SetsDataProps[] = [
  {
    setId: '1',
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
    setId: '2',
    fighters: ['5'],
    battlefields: [],
    ru: false
  },
  {
    setId: '3',
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
    setId: '4',
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
    setId: '5',
    fighters: ['10', '11', '12', '13'],
    battlefields: [
      {
        battlefieldId: '6',
        battlefieldPlayers: 2
      },
      {
        battlefieldId: '7',
        battlefieldPlayers: 2
      },
    ],
    ru: true
  },
  {
    setId: '6',
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
    setId: '7',
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
    setId: '8',
    fighters: ['20'],
    battlefields: [],
    ru: false
  },
  {
    setId: '9',
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
    setId: '10',
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
    setId: '11',
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
    setId: '12',
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
    setId: '13',
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
    setId: '14',
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
    setId: '15',
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
    setId: '16',
    fighters: ['41', '42', '43'],
    battlefields: [
      {
        battlefieldId: '18',
        battlefieldPlayers: 4
      }
    ],
    ru: false
  },
]