export interface setsDataProps {
  setIndex: string,
  setName: string,
  imgSrc: string,
  fighters: string[],
  battlefields: string[],
  ru?: boolean
}

export const imgPath = 'https://storage.googleapis.com/randomatched';

export const setsDataRu: setsDataProps[] = [
  {
    setIndex: '1',
    setName: 'Битва Легенд.Том 1',
    imgSrc: `${imgPath}/sets/ru/vol1.jpg`,
    fighters: ['Медуза', 'Король Артур', 'Синбад', 'Алиса'],
    battlefields: ['I. Сарпедон', 'II. Мармореал'],
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
    battlefields: ['III. Шервудский лес', 'IV. Юкон'],
    ru: true
  },
  {
    setIndex: '4',
    setName: 'InGen vs. Raptors',
    imgSrc: `${imgPath}/sets/en/rapt.jpg`,
    fighters: ['ИнГен', 'Рапторы'],
    battlefields: ['Raptor Paddock']
  },
  {
    setIndex: '5',
    setName: 'Туман над Мостовой',
    imgSrc: `${imgPath}/sets/ru/cobble.jpg`,
    fighters: ['Шерлок Холмс', 'Джекил и Хайд', 'Дракула', 'Невидимка'],
    battlefields: ['V. Поместье Баскервиль', 'VI. Сохо'],
    ru: true
  },
  {
    setIndex: '6',
    setName: 'Buffy the Vampire Slayer',
    imgSrc: `${imgPath}/sets/en/buffy.jpg`,
    fighters: ['Баффи', 'Спайк', 'Уиллоу', 'Ангел'],
    battlefields: ['The Bronze', 'Sunnydale High']
  },
  {
    setIndex: '7',
    setName: 'Красная Шапочка vs. Беовульф',
    imgSrc: `${imgPath}/sets/ru/hood.jpg`,
    fighters: ['Красная Шапочка', 'Беовульф'],
    battlefields: ['VII. Хеорот'],
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
    battlefields: ['VIII. Висячие сады'],
    ru: true
  },
  {
    setIndex: '10',
    setName: 'Redemption Row',
    imgSrc: `${imgPath}/sets/en/redemption.jpg`,
    fighters: ['Люк Кейдж', 'Призрачный Гонщик', 'Лунный рыцарь'],
    battlefields: ['The Raft']
  },
  {
    setIndex: '11',
    setName: `Hell's Kitchen`,
    imgSrc: `${imgPath}/sets/en/hells.jpg`,
    fighters: ['Сорвиголова', 'Меченый', 'Электра'],
    battlefields: [`Hell's Kitchen`]
  },
  {
    setIndex: '12',
    setName: `Sattler vs. T-Rex`,
    imgSrc: `${imgPath}/sets/en/trex.jpg`,
    fighters: ['Доктор Сэттлер', 'Ти-Рекс',],
    battlefields: [`T-Rex Paddock`]
  },
  {
    setIndex: '13',
    setName: 'Гудини vs. Джинн',
    imgSrc: `${imgPath}/sets/ru/houdini.jpg`,
    fighters: ['Гудини', 'Джинн'],
    battlefields: ['IX. Копи царя Соломона'],
    ru: true
  },
  {
    setIndex: '14',
    setName: `Teen Spirit`,
    imgSrc: `${imgPath}/sets/en/teen.jpg`,
    fighters: ['Девушка-белка', 'Плащ и Кинжал', 'Мисс Марвел'],
    battlefields: [`Navy Pier`]
  },
  {
    setIndex: '15',
    setName: `For King and Country`,
    imgSrc: `${imgPath}/sets/en/forking.jpg`,
    fighters: ['Чёрная Вдова', 'Чёрная Пантера', 'Зимний Солдат'],
    battlefields: [`Helicarrier`]
  },
  {
    setIndex: '16',
    setName: `Brains and Brawn`,
    imgSrc: `${imgPath}/sets/en/brains.jpg`,
    fighters: ['Женщина-Халк', 'Доктор Стрэндж', 'Человек-паук'],
    battlefields: [`Sanctum Sanctorum`]
  },
];

export const setsDataEn: setsDataProps[] = [
  {
    setIndex: '1',
    setName: 'Battle of Legends. Vol. 1',
    imgSrc: `${imgPath}/sets/en/vol 1.jpg`,
    fighters: ['Medusa', 'King Arthur', 'Sinbad', 'Alice'],
    battlefields: ['Sarpedon', 'Marmoreal'],
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
    battlefields: ['Sherwood Forest', 'Yukon'],
  },
  {
    setIndex: '4',
    setName: 'InGen vs. Raptors',
    imgSrc: `${imgPath}/sets/en/rapt.jpg`,
    fighters: ['InGen', 'Raptors'],
    battlefields: ['Raptor Paddock']
  },
  {
    setIndex: '5',
    setName: 'Cobble & Fog',
    imgSrc: `${imgPath}/sets/en/cobble.jpg`,
    fighters: ['Sherlock Holmes', 'Jekyll and Hyde', 'Dracula', 'Invisible Man'],
    battlefields: ['Baskerville Manor', 'Soho'],
  },
  {
    setIndex: '6',
    setName: 'Buffy the Vampire Slayer',
    imgSrc: `${imgPath}/sets/en/buffy.jpg`,
    fighters: ['Buffy', 'Spike', 'Willow', 'Angel'],
    battlefields: ['The Bronze', 'Sunnydale High']
  },
  {
    setIndex: '7',
    setName: 'Little Red Riding Hood vs. Beowulf',
    imgSrc: `${imgPath}/sets/en/little red.jpg`,
    fighters: ['Little Red Riding Hood', 'Beowulf'],
    battlefields: ['Heorot'],
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
    setName: 'Battle of Legends.Vol. 2',
    imgSrc: `${imgPath}/sets/en/vol 2.jpg`,
    fighters: ['Achilles', 'Bloody Mary', 'Sun Wukong', 'Yennenga'],
    battlefields: ['Hanging Gardens'],
  },
  {
    setIndex: '10',
    setName: 'Redemption Row',
    imgSrc: `${imgPath}/sets/en/redemption.jpg`,
    fighters: ['Luke Cage', 'Ghost Rider', 'Moon Knight'],
    battlefields: ['The Raft']
  },
  {
    setIndex: '11',
    setName: `Hell's Kitchen`,
    imgSrc: `${imgPath}/sets/en/hells.jpg`,
    fighters: ['Daredevil', 'Bullseye', 'Elektra'],
    battlefields: [`Hell's Kitchen`]
  },
  {
    setIndex: '12',
    setName: `Sattler vs. T-Rex`,
    imgSrc: `${imgPath}/sets/en/trex.jpg`,
    fighters: ['Dr.Sattler', 'T-Rex',],
    battlefields: [`T-Rex Paddock`]
  },
  {
    setIndex: '13',
    setName: 'Houdini vs. The Genie',
    imgSrc: `${imgPath}/sets/en/houdini.jpg`,
    fighters: ['Houdini', 'The Genie'],
    battlefields: [`King Solomon's Mine`],
    ru: true
  },
  {
    setIndex: '14',
    setName: `Teen Spirit`,
    imgSrc: `${imgPath}/sets/en/teen.jpg`,
    fighters: ['Squirrel Girl', 'Cloak & Dagger', 'Ms.Marvel'],
    battlefields: [`Navy Pier`]
  },
  {
    setIndex: '15',
    setName: `For King and Country`,
    imgSrc: `${imgPath}/sets/en/forking.jpg`,
    fighters: ['Black Widow', 'Black Panther', 'Winter Soldier'],
    battlefields: [`Helicarrier`]
  },
  {
    setIndex: '16',
    setName: `Brains and Brawn`,
    imgSrc: `${imgPath}/sets/en/brains.jpg`,
    fighters: ['She-Hulk', 'Doctor Strange', 'Spider-Man'],
    battlefields: [`Sanctum Sanctorum`]
  },
];

export const ruFighters: string[] = setsDataRu.filter((set) => set.ru).map((set) => set.fighters).flat(1);
export const allFightersRu: string[] = setsDataRu.map((set) => set.fighters).flat(1);
export const allFightersEn: string[] = setsDataEn.map((set) => set.fighters).flat(1);

export const ruBattlefields: string[] = setsDataRu.filter((set) => set.ru).map((set) => set.battlefields).flat(1);
export const allBattlefieldsRu: string[] = setsDataRu.map((set) => set.battlefields).flat(1);
export const allBattlefieldsEn: string[] = setsDataEn.map((set) => set.battlefields).flat(1);

export const ruSets: string[] = setsDataRu.filter((set) => set.ru).map((set) => set.setIndex).flat(1);
export const allSets: string[] = setsDataRu.map((set) => set.setIndex);