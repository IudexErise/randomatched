import { StaticImageData } from 'next/image';
import vol1 from './../../public/sets/vol1.jpg';
import cobble from './../../public/sets/cobble.jpg';
import vol2 from './../../public/sets/vol2.jpg';
import robin from './../../public/sets/robin.jpg';
import hood from './../../public/sets/hood.jpg';
import houdini from './../../public/sets/houdini.jpg';
import buffy from './../../public/sets/buffy.jpg';
import deadpool from './../../public/sets/deadpool.jpg';
import redemption from './../../public/sets/redemption.jpg';
import hells from './../../public/sets/hells.jpg';
import trex from './../../public/sets/trex.jpg';
import teen from './../../public/sets/teen.jpg';
import forking from './../../public/sets/forking.jpg';
import brains from './../../public/sets/brains.jpg';
import bruce from './../../public/sets/bruce.jpg';
import rapt from './../../public/sets/rapt.jpg';

export interface setsDataProps {
  setIndex: string,
  setName: string,
  imgSrc: StaticImageData,
  fighters: string[],
  battlefields: string[],
}

export const setsData: setsDataProps[] = [
  {
    setIndex: '1',
    setName: 'Том 1',
    imgSrc: vol1,
    fighters: ['Медуза', 'Артур', 'Синбад', 'Алиса'],
    battlefields: ['I. Сарпедон', 'II. Мармореал']
  },
  {
    setIndex: '2',
    setName: 'Робин Гуд vs. Бигфут',
    imgSrc: robin,
    fighters: ['Робин Гуд', 'Бигфут'],
    battlefields: ['III. Шервудский лес', 'IV. Юкон']
  },
  {
    setIndex: '3',
    setName: 'Туман над Мостовой',
    imgSrc: cobble,
    fighters: ['Шерлок Холмс', 'Джекил и Хайд', 'Дракула', 'Невидимка'],
    battlefields: ['V. Поместье Баскервиль', 'VI. Сохо']
  },
  {
    setIndex: '4',
    setName: 'Красная Шапочка vs. Беовульф',
    imgSrc: hood,
    fighters: ['Красная Шапочка', 'Беовульф'],
    battlefields: ['VII. Хеорот']
  },
  {
    setIndex: '5',
    setName: 'Том 2',
    imgSrc: vol2,
    fighters: ['Ахиллес', 'Кровавая Мэри', 'Сунь Укун', 'Йенненга'],
    battlefields: ['VIII. Висячие сады']
  },
  {
    setIndex: '6',
    setName: 'Гудини vs. Джинн',
    imgSrc: houdini,
    fighters: ['Гудини', 'Джинн'],
    battlefields: ['IX. Копи царя Соломона']
  },
  {
    setIndex: '7',
    setName: 'Bruce Lee',
    imgSrc: bruce,
    fighters: ['Брюс Ли'],
    battlefields: []
  },
  {
    setIndex: '8',
    setName: 'InGen vs. Raptors',
    imgSrc: rapt,
    fighters: ['Роберт Малдун', 'Рапторы'],
    battlefields: ['Raptor Paddock']
  },
  {
    setIndex: '9',
    setName: 'Buffy the Vampire Slayer',
    imgSrc: buffy,
    fighters: ['Баффи', 'Спайк', 'Уиллоу', 'Ангел'],
    battlefields: ['The Bronze', 'Sunnydale High']
  },
  {
    setIndex: '10',
    setName: 'Deadpool',
    imgSrc: deadpool,
    fighters: ['Дэдпул'],
    battlefields: []
  },
  {
    setIndex: '11',
    setName: 'Redemption Row',
    imgSrc: redemption,
    fighters: ['Люк Кейдж', 'Призрачный Гонщик', 'Лунный рыцарь'],
    battlefields: ['The Raft']
  },
  {
    setIndex: '12',
    setName: `Hell's Kitchen`,
    imgSrc: hells,
    fighters: ['Сорвиголова', 'Меченый', 'Электра'],
    battlefields: [`Hell's Kitchen`]
  },
  {
    setIndex: '13',
    setName: `Sattler vs. T-Rex`,
    imgSrc: trex,
    fighters: ['Доктор Сэттлер', 'Ти-рекс',],
    battlefields: [`T-Rex Paddock`]
  },
  {
    setIndex: '14',
    setName: `Teen Spirit`,
    imgSrc: teen,
    fighters: ['Девушка-белка', 'Плащ и Кинжал', 'Мисс Марвел'],
    battlefields: [`Navy Pier`]
  },
  {
    setIndex: '15',
    setName: `For King and Country`,
    imgSrc: forking,
    fighters: ['Чёрная Вдова', 'Чёрная Пантера', 'Зимний Солдат'],
    battlefields: [`Helicarrier`]
  },
  {
    setIndex: '16',
    setName: `Brains and Brawn`,
    imgSrc: brains,
    fighters: ['Женщина-Халк', 'Доктор Стрэндж', 'Человек-паук'],
    battlefields: [`Sanctum Sanctorum`]
  },
];

export const ruFighters: string[] = ["Медуза", "Артур", "Синбад", "Алиса", "Робин Гуд", "Бигфут", "Шерлок Холмс", "Джекил и Хайд", "Дракула", "Невидимка", "Красная Шапочка", "Беовульф", "Ахиллес", "Кровавая Мэри", "Сунь Укун", "Йенненга", "Гудини", "Джинн"]
export const allFighters: string[] = ["Медуза", "Артур", "Синбад", "Алиса", "Робин Гуд", "Бигфут", "Шерлок Холмс", "Джекил и Хайд", "Дракула", "Невидимка", "Красная Шапочка", "Беовульф", "Ахиллес", "Кровавая Мэри", "Сунь Укун", "Йенненга", "Гудини", "Джинн", "Брюс Ли", "Роберт Малдун", "Рапторы", "Баффи", "Спайк", "Уиллоу", "Ангел", "Дэдпул", "Люк Кейдж", "Призрачный Гонщик", "Лунный рыцарь", "Сорвиголова", "Меченый", "Электра", "Доктор Сэттлер", "Ти-рекс", "Девушка-белка", "Плащ и Кинжал", "Мисс Марвел", "Чёрная Вдова", "Чёрная Пантера", "Зимний Солдат", "Женщина-Халк", "Доктор Стрэндж", "Человек-паук"]

export const ruBattlefields: string[] = ["I. Сарпедон", "II. Мармореал", "III. Шервудский лес", "IV. Юкон", "V. Поместье Баскервиль", "VI. Сохо", "VII. Хеорот", "VIII. Висячие сады", "IX. Копи царя Соломона"]
export const allBattlefields: string[] = ["I. Сарпедон", "II. Мармореал", "III. Шервудский лес", "IV. Юкон", "V. Поместье Баскервиль", "VI. Сохо", "VII. Хеорот", "VIII. Висячие сады", "IX. Копи царя Соломона", "Raptor Paddock", "The Bronze", "Sunnydale High", "The Raft", "Hell's Kitchen", "T-Rex Paddock", "Navy Pier", "Helicarrier", "Sanctum Sanctorum"]

export const ruSets: string[] = ["1", "2", "3", "4", "5", "6"]
export const allSets: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"]