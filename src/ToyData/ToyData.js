import dinoId1 from '../images/dino/dinoId1.jpg'
import dinoId2 from '../images/dino/dinoId2.jpg'

import flyId1 from '../images/fly/flyId1.jpg'

export const dino = [
   {
     id: 'dino1',
     type: 'dino',
     name: 't-rex',
     foto: dinoId1,
     size: {
       width: 20,
       hight: 12
     },
     discription: 'prity dino figure! Very interesting for your kid! ...',
     price: 15,
   },
   {
     id: 'dino2',
     type: 'dino',
     name: 'diplo',
     foto: dinoId2,
     size: {
       width: 30,
       hight: 15
     },
     discription: 'prity dino figure! Very interesting for your kid! ...',
     price: 25,
   },
   {
    id: 'dino3',
    type: 'dino',
    name: 'diplo',
    foto: dinoId2,
    size: {
      width: 30,
      hight: 15
    },
    discription: 'prity dino figure! Very interesting for your kid! ...',
    price: 25,
  },
  {
    id: 'dino4',
    type: 'dino',
    name: 't-rex',
    foto: dinoId1,
    size: {
      width: 20,
      hight: 12
    },
    discription: 'prity dino figure! Very interesting for your kid! ...',
    price: 15,
  },
  ]



 export const fly = [
  {
    id: 'fly1',
    type: 'fly',
    name: 'bee',
    foto: flyId1,
    size: {
      width: 15,
      hight: 15
    },
    discription: 'prity Bee figure! Very interesting for your kid! ...',
    price: 25,
  },
  {
    id: 'fly2',
    type: 'fly',
    name: 'butterfly',
    foto: flyId1,
    size: {
      width: 25,
      hight: 25
    },
    discription: 'prity butterfly figure! Very interesting for your kid! ...',
    price: 18,
  }
 ]

 export const dataToy = [...fly, ...dino]