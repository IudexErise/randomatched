import { StaticImageData } from 'next/image';
import vol1 from './../../public/vol1.jpg';
import cobble from './../../public/cobble.jpg';
import vol2 from './../../public/vol2.jpg';
import robin from './../../public/robin.jpg';
import hood from './../../public/hood.jpg';
import houdini from './../../public/houdini.jpg';

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
]