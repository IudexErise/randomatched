export interface setsDataProps {
  setIndex: string,
  setName: string,
  imgSrc: string,
  fighters: string[],
  battlefields: string[],
}

export const imgPath = 'https://storage.googleapis.com/randomatched';

export const setsData: setsDataProps[] = [
  {
    setIndex: '1',
    setName: 'Том 1',
    imgSrc: `${imgPath}/ru/vol1.jpg`,
    fighters: ['Медуза', 'Артур', 'Синбад', 'Алиса'],
    battlefields: ['I. Сарпедон', 'II. Мармореал']
  },
  {
    setIndex: '2',
    setName: 'Робин Гуд vs. Бигфут',
    imgSrc: `${imgPath}/ru/robin.jpg`,
    fighters: ['Робин Гуд', 'Бигфут'],
    battlefields: ['III. Шервудский лес', 'IV. Юкон']
  },
  {
    setIndex: '3',
    setName: 'Туман над Мостовой',
    imgSrc: `${imgPath}/ru/cobble.jpg`,
    fighters: ['Шерлок Холмс', 'Джекил и Хайд', 'Дракула', 'Невидимка'],
    battlefields: ['V. Поместье Баскервиль', 'VI. Сохо']
  },
  {
    setIndex: '4',
    setName: 'Красная Шапочка vs. Беовульф',
    imgSrc: `${imgPath}/ru/hood.jpg`,
    fighters: ['Красная Шапочка', 'Беовульф'],
    battlefields: ['VII. Хеорот']
  },
  {
    setIndex: '5',
    setName: 'Том 2',
    imgSrc: `${imgPath}/ru/vol2.jpg`,
    fighters: ['Ахиллес', 'Кровавая Мэри', 'Сунь Укун', 'Йенненга'],
    battlefields: ['VIII. Висячие сады']
  },
  {
    setIndex: '6',
    setName: 'Гудини vs. Джинн',
    imgSrc: `${imgPath}/ru/houdini.jpg`,
    fighters: ['Гудини', 'Джинн'],
    battlefields: ['IX. Копи царя Соломона']
  },
  {
    setIndex: '7',
    setName: 'Bruce Lee',
    imgSrc: `${imgPath}/ru/bruce.jpg`,
    fighters: ['Брюс Ли'],
    battlefields: []
  },
  {
    setIndex: '8',
    setName: 'InGen vs. Raptors',
    imgSrc: `${imgPath}/ru/rapt.jpg`,
    fighters: ['Роберт Малдун', 'Рапторы'],
    battlefields: ['Raptor Paddock']
  },
  {
    setIndex: '9',
    setName: 'Buffy the Vampire Slayer',
    imgSrc: `${imgPath}/ru/buffy.jpg`,
    fighters: ['Баффи', 'Спайк', 'Уиллоу', 'Ангел'],
    battlefields: ['The Bronze', 'Sunnydale High']
  },
  {
    setIndex: '10',
    setName: 'Deadpool',
    imgSrc: `${imgPath}/ru/deadpool.jpg`,
    fighters: ['Дэдпул'],
    battlefields: []
  },
  {
    setIndex: '11',
    setName: 'Redemption Row',
    imgSrc: `${imgPath}/ru/redemption.jpg`,
    fighters: ['Люк Кейдж', 'Призрачный Гонщик', 'Лунный рыцарь'],
    battlefields: ['The Raft']
  },
  {
    setIndex: '12',
    setName: `Hell's Kitchen`,
    imgSrc: `${imgPath}/ru/hells.jpg`,
    fighters: ['Сорвиголова', 'Меченый', 'Электра'],
    battlefields: [`Hell's Kitchen`]
  },
  {
    setIndex: '13',
    setName: `Sattler vs. T-Rex`,
    imgSrc: `${imgPath}/ru/trex.jpg`,
    fighters: ['Доктор Сэттлер', 'Ти-Рекс',],
    battlefields: [`T-Rex Paddock`]
  },
  {
    setIndex: '14',
    setName: `Teen Spirit`,
    imgSrc: `${imgPath}/ru/teen.jpg`,
    fighters: ['Девушка-белка', 'Плащ и Кинжал', 'Мисс Марвел'],
    battlefields: [`Navy Pier`]
  },
  {
    setIndex: '15',
    setName: `For King and Country`,
    imgSrc: `${imgPath}/ru/forking.jpg`,
    fighters: ['Чёрная Вдова', 'Чёрная Пантера', 'Зимний Солдат'],
    battlefields: [`Helicarrier`]
  },
  {
    setIndex: '16',
    setName: `Brains and Brawn`,
    imgSrc: `${imgPath}/ru/brains.jpg`,
    fighters: ['Женщина-Халк', 'Доктор Стрэндж', 'Человек-паук'],
    battlefields: [`Sanctum Sanctorum`]
  },
];

export const ruFighters: string[] = setsData.slice(0, 6).map((set) => set.fighters).flat(1);
export const allFighters: string[] = setsData.map((set) => set.fighters).flat(1);

export const ruBattlefields: string[] = setsData.slice(0, 6).map((set) => set.battlefields).flat(1);
export const allBattlefields: string[] = setsData.map((set) => set.battlefields).flat(1);

export const ruSets: string[] = setsData.slice(0, 6).map((set) => set.setIndex);
export const allSets: string[] = setsData.map((set) => set.setIndex);