/*Понимаю, что способ хранения в качестве списка не самый оптимальный. 
Была попытка подключить библиотеку Dexie для работы с базой данных, но она не увенчалась успехом, а сроки поджимали.*/

import {INote} from '../models/inote'

export const notes: INote[] = [
  {
    uploadTime: new Date('Sun Aug 20 2023 20:30:52 GMT+0300 (Москва, стандартное время)'),
    text: "Привет! Я ваш личный дневник! Расскажите, что произошло сегодня?",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTXjRXF7xtuhtPyslUPXq9_-D5xpDXRpaJhLxQYfZz&s',
    forEditor:{
    blocks: [ 
    {id: 'Hjckaogn1Q',
     type: 'paragraph',
     data: {text: 'Привет! Я ваш личный дневник! Расскажите, что произошло сегодня?'}}],
    time: 1692557659610,
    version: "2.27.2"}
  }
]