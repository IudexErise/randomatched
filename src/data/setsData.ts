import { StaticImageData } from 'next/image';
import vol1 from './../../public/sets/vol1.jpg';
import cobble from './../../public/sets/cobble.jpg';
import vol2 from './../../public/sets/vol2.jpg';
import robin from './../../public/sets/robin.jpg';
import hood from './../../public/sets/hood.jpg';
import houdini from './../../public/sets/houdini.jpg';
import raptors from './../../public/sets/raptors.jpg';
import buffy from './../../public/sets/buffy.jpg';
import deadpool from './../../public/sets/deadpool.jpg';
import redemption from './../../public/sets/redemption.jpg';
import hells from './../../public/sets/hells.jpg';
import trex from './../../public/sets/trex.jpg';
import teen from './../../public/sets/teen.jpg';
import forking from './../../public/sets/forking.jpg';
import brains from './../../public/sets/brains.jpg';
import bruce from './../../public/sets/bruce.jpg';

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
    imgSrc: raptors,
    fighters: ['Роберт Балдун', 'Рапторы'],
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
    battlefields: [`Sanctum Santorum`]
  },
]