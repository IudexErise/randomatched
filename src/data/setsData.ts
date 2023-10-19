export interface setsDataProps {
  setIndex: string,
  setName: string,
  imgSrc: string,
  fighters: string[],
  battlefields: {name: string, players: number}[],
  ru?: boolean
}

export interface battlefieldProps {
  name: string, 
  players: number
}

export const imgPath = 'https://storage.googleapis.com/randomatched';

export const setsDataRu: setsDataProps[] = [
  {
    setIndex: '1',
    setName: 'Битва Легенд.Том 1',
    imgSrc: `${imgPath}/sets/ru/vol1.jpg`,
    fighters: ['Медуза', 'Король Артур', 'Синбад', 'Алиса'],
    battlefields: [{name :'I. Сарпедон', players: 4}, {name: 'II. Мармореал', players: 4}],
    ru: true
  },
  {
    setIndex: '2',
    setName: 'Bruce Lee',
    imgSrc: `${imgPath}/sets/en/bruce.jpg`,
    fighters: ['Брюс Ли'],
    battlefields: []
  },
  {
    setIndex: '3',
    setName: 'Робин Гуд vs. Бигфут',
    imgSrc: `${imgPath}/sets/ru/robin.jpg`,
    fighters: ['Робин Гуд', 'Бигфут'],
    battlefields: [{name :'III. Шервудский лес', players: 2}, {name: 'IV. Юкон', players: 2}],
    ru: true
  },
  {
    setIndex: '4',
    setName: 'InGen vs. Raptors',
    imgSrc: `${imgPath}/sets/en/rapt.jpg`,
    fighters: ['ИнГен', 'Рапторы'],
    battlefields: [{name : 'Raptor Paddock', players: 2}]
  },
  {
    setIndex: '5',
    setName: 'Туман над Мостовой',
    imgSrc: `${imgPath}/sets/ru/cobble.jpg`,
    fighters: ['Шерлок Холмс', 'Джекил и Хайд', 'Дракула', 'Невидимка'],
    battlefields: [{name :'V. Поместье Баскервиль', players: 4}, {name: 'VI. Сохо', players: 4}],
    ru: true
  },
  {
    setIndex: '6',
    setName: 'Buffy the Vampire Slayer',
    imgSrc: `${imgPath}/sets/en/buffy.jpg`,
    fighters: ['Баффи', 'Спайк', 'Уиллоу', 'Ангел'],
    battlefields: [{name :'The Bronze', players: 4}, {name: 'Sunnydale High', players: 4}],
  },
  {
    setIndex: '7',
    setName: 'Красная Шапочка vs. Беовульф',
    imgSrc: `${imgPath}/sets/ru/hood.jpg`,
    fighters: ['Красная Шапочка', 'Беовульф'],
    battlefields: [{name :'VII. Хеорот', players: 2}],
    ru: true
  },
  {
    setIndex: '8',
    setName: 'Deadpool',
    imgSrc: `${imgPath}/sets/en/deadpool.jpg`,
    fighters: ['Дэдпул'],
    battlefields: []
  },
  {
    setIndex: '9',
    setName: 'Битва Легенд.Том 2',
    imgSrc: `${imgPath}/sets/ru/vol2.jpg`,
    fighters: ['Ахиллес', 'Кровавая Мэри', 'Сунь Укун', 'Йенненга'],
    battlefields: [{name :'VIII. Висячие сады', players: 4}],
    ru: true
  },
  {
    setIndex: '10',
    setName: 'Redemption Row',
    imgSrc: `${imgPath}/sets/en/redemption.jpg`,
    fighters: ['Люк Кейдж', 'Призрачный Гонщик', 'Лунный рыцарь'],
    battlefields: [{name :'The Raft', players: 4}],
  },
  {
    setIndex: '11',
    setName: `Hell's Kitchen`,
    imgSrc: `${imgPath}/sets/en/hells.jpg`,
    fighters: ['Сорвиголова', 'Меченый', 'Электра'],
    battlefields: [{name :`Hell's Kitchen`, players: 4}],
  },
  {
    setIndex: '12',
    setName: `Sattler vs. T-Rex`,
    imgSrc: `${imgPath}/sets/en/trex.jpg`,
    fighters: ['Доктор Сэттлер', 'Ти-Рекс',],
    battlefields: [{name :'T-Rex Paddock', players: 2}],
  },
  {
    setIndex: '13',
    setName: 'Гудини vs. Джинн',
    imgSrc: `${imgPath}/sets/ru/houdini.jpg`,
    fighters: ['Гудини', 'Джинн'],
    battlefields: [{name :'IX. Копи царя Соломона', players: 2}],
    ru: true
  },
  {
    setIndex: '14',
    setName: `Teen Spirit`,
    imgSrc: `${imgPath}/sets/en/teen.jpg`,
    fighters: ['Девушка-белка', 'Плащ и Кинжал', 'Мисс Марвел'],
    battlefields: [{name :'Navy Pier', players: 4}],
  },
  {
    setIndex: '15',
    setName: `For King and Country`,
    imgSrc: `${imgPath}/sets/en/forking.jpg`,
    fighters: ['Чёрная Вдова', 'Чёрная Пантера', 'Зимний Солдат'],
    battlefields: [{name :'Helicarrier', players: 4}],
  },
  {
    setIndex: '16',
    setName: `Brains and Brawn`,
    imgSrc: `${imgPath}/sets/en/brains.jpg`,
    fighters: ['Женщина-Халк', 'Доктор Стрэндж', 'Человек-паук'],
    battlefields: [{name :'Sanctum Sanctorum', players: 4}],
  },
];

export const setsDataEn: setsDataProps[] = [
  {
    setIndex: '1',
    setName: 'Battle of Legends. Vol. 1',
    imgSrc: `${imgPath}/sets/en/vol 1.jpg`,
    fighters: ['Medusa', 'King Arthur', 'Sinbad', 'Alice'],
    battlefields: [{name :'Sarpedon', players: 4}, {name: 'Marmoreal', players: 4}],
  },
  {
    setIndex: '2',
    setName: 'Bruce Lee',
    imgSrc: `${imgPath}/sets/en/bruce.jpg`,
    fighters: ['Bruce Lee'],
    battlefields: []
  },
  {
    setIndex: '3',
    setName: 'Robin Hood vs. Bigfoot',
    imgSrc: `${imgPath}/sets/en/robin.jpg`,
    fighters: ['Robin Hood', 'Bigfoot'],
    battlefields: [{name :'Sherwood Forest', players: 2}, {name: 'Yukon', players: 2}],
  },
  {
    setIndex: '4',
    setName: 'InGen vs. Raptors',
    imgSrc: `${imgPath}/sets/en/rapt.jpg`,
    fighters: ['InGen', 'Raptors'],
    battlefields: [{name :'Raptor Paddock', players: 2}],
  },
  {
    setIndex: '5',
    setName: 'Cobble & Fog',
    imgSrc: `${imgPath}/sets/en/cobble.jpg`,
    fighters: ['Sherlock Holmes', 'Jekyll and Hyde', 'Dracula', 'Invisible Man'],
    battlefields: [{name :'Baskerville Manor', players: 4}, {name: 'Soho', players: 4}],
  },
  {
    setIndex: '6',
    setName: 'Buffy the Vampire Slayer',
    imgSrc: `${imgPath}/sets/en/buffy.jpg`,
    fighters: ['Buffy', 'Spike', 'Willow', 'Angel'],
    battlefields: [{name :'The Bronze', players: 4}, {name: 'Sunnydale High', players: 4}],
  },
  {
    setIndex: '7',
    setName: 'Little Red Riding Hood vs. Beowulf',
    imgSrc: `${imgPath}/sets/en/little red.jpg`,
    fighters: ['Little Red Riding Hood', 'Beowulf'],
    battlefields: [{name :'Heorot', players: 2}],
  },
  {
    setIndex: '8',
    setName: 'Deadpool',
    imgSrc: `${imgPath}/sets/en/deadpool.jpg`,
    fighters: ['Deadpool'],
    battlefields: []
  },
  {
    setIndex: '9',
    setName: 'Battle of Legends. Vol. 2',
    imgSrc: `${imgPath}/sets/en/vol 2.jpg`,
    fighters: ['Achilles', 'Bloody Mary', 'Sun Wukong', 'Yennenga'],
    battlefields: [{name :'Hanging Gardens', players: 4}],
  },
  {
    setIndex: '10',
    setName: 'Redemption Row',
    imgSrc: `${imgPath}/sets/en/redemption.jpg`,
    fighters: ['Luke Cage', 'Ghost Rider', 'Moon Knight'],
    battlefields: [{name :'The Raft', players: 4}],
  },
  {
    setIndex: '11',
    setName: `Hell's Kitchen`,
    imgSrc: `${imgPath}/sets/en/hells.jpg`,
    fighters: ['Daredevil', 'Bullseye', 'Elektra'],
    battlefields: [{name :`Hell's Kitchen`, players: 4}],
  },
  {
    setIndex: '12',
    setName: `Dr.Sattler vs. T-Rex`,
    imgSrc: `${imgPath}/sets/en/trex.jpg`,
    fighters: ['Dr.Sattler', 'T-Rex',],
    battlefields: [{name :'T-Rex Paddock', players: 2}],
  },
  {
    setIndex: '13',
    setName: 'Houdini vs. The Genie',
    imgSrc: `${imgPath}/sets/en/houdini.jpg`,
    fighters: ['Houdini', 'The Genie'],
    battlefields: [{name :`King Solomon's Mine`, players: 2}],
  },
  {
    setIndex: '14',
    setName: `Teen Spirit`,
    imgSrc: `${imgPath}/sets/en/teen.jpg`,
    fighters: ['Squirrel Girl', 'Cloak & Dagger', 'Ms.Marvel'],
    battlefields: [{name :'Navy Pier', players: 4}],
  },
  {
    setIndex: '15',
    setName: `For King and Country`,
    imgSrc: `${imgPath}/sets/en/forking.jpg`,
    fighters: ['Black Widow', 'Black Panther', 'Winter Soldier'],
    battlefields: [{name :'Helicarrier', players: 4}],
  },
  {
    setIndex: '16',
    setName: `Brains and Brawn`,
    imgSrc: `${imgPath}/sets/en/brains.jpg`,
    fighters: ['She-Hulk', 'Doctor Strange', 'Spider-Man'],
    battlefields: [{name :'Sanctum Sanctorum', players: 4}],
  },
  
/*   {
    setIndex: '17',
    setName: `Tales to Amaze`,
    imgSrc: `${imgPath}/sets/en/tales.jpg`,
    fighters: ['Annie Christmas', 'Jill Trent', 'Golden Bat', 'Nikola Tesla'],
    battlefields: [``]
  }, */
];

export const ruFighters: string[] = setsDataRu.filter((set) => set.ru).map((set) => set.fighters).flat(1);
export const allFightersRu: string[] = setsDataRu.map((set) => set.fighters).flat(1);
export const allFightersEn: string[] = setsDataEn.map((set) => set.fighters).flat(1);

export const ruBattlefields: battlefieldProps[] = setsDataRu.filter((set) => set.ru).map((set) => set.battlefields).flat(1);
export const allBattlefieldsRu: battlefieldProps[] = setsDataRu.map((set) => set.battlefields).flat(1);
export const allBattlefieldsEn: battlefieldProps[] = setsDataEn.map((set) => set.battlefields).flat(1);

export const ruSets: string[] = setsDataRu.filter((set) => set.ru).map((set) => set.setIndex).flat(1);
export const allSets: string[] = setsDataRu.map((set) => set.setIndex);