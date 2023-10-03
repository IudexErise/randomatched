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
  imgSrc: StaticImageData
}

export const setsData : setsDataProps[] = [
  {
    setIndex: '1',
    setName: 'Том 1',
    imgSrc: vol1
  },
  {
    setIndex: '2',
    setName: 'Туман над Мостовой',
    imgSrc: cobble
  },
  {
    setIndex: '3',
    setName: 'Том 2',
    imgSrc: vol2
  },
  {
    setIndex: '4',
    setName: 'Красная Шапочка vs. Беовульф',
    imgSrc: hood
  },
  {
    setIndex: '5',
    setName: 'Робин Гуд vs. Бигфут',
    imgSrc: robin
  },
  {
    setIndex: '6',
    setName: 'Гудини vs. Джинн',
    imgSrc: houdini
  },
]