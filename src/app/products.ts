export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  weight: number;
  length: number;
  height: number;
  width: number;
  diameter: number;
  evaluation: number;
}

export const products = [
  {
    id: 1,
    name: 'O Gigante de Ferro',
    price: 10,
    description: 'Action figure de O Gigante de Ferro',
    image: 'assets/products/robot.jpeg',
    weight: 25,
    length: 5,
    height: 20,
    width: 5,
    diameter: 10,
    evaluation: 4
  },
  {
    id: 2,
    name: 'Star Trek',
    price: 15,
    description: 'Action figure de Star Trek',
    image: 'assets/products/star_trek.jpeg',
    weight: 20,
    length: 6,
    height: 18,
    width: 6,
    diameter: 8,
    evaluation: 2
  },
  {
    id: 3,
    name: 'Stormtrooper',
    price: 20,
    description: 'Action figure de Stormtrooper',
    image: 'assets/products/stormtrooper.jpeg',
    weight: 25,
    length: 5,
    height: 20,
    width: 5,
    diameter: 10,
    evaluation: 4
  },
  {
    id: 4,
    name: 'Bruce Lee',
    price: 25,
    description: 'Action figure de Bruce Lee',
    image: 'assets/products/bruce_lee.jpeg',
    weight: 30,
    length: 7,
    height: 22,
    width: 7,
    diameter: 11,
    evaluation: 4
  },
  {
    id: 5,
    name: 'Buzz Lightyear',
    price: 30,
    description: 'Action figure de Buzz Lightyear',
    image: 'assets/products/buzz.jpeg',
    weight: 32,
    length: 9,
    height: 24,
    width: 9,
    diameter: 12,
    evaluation: 5
  },
  {
    id: 6,
    name: 'Stormtrooper LEGO',
    price: 35,
    description: 'Action figure de Stormtrooper LEGO',
    image: 'assets/products/stormtrooper_lego.jpeg',
    weight: 34,
    length: 11,
    height: 26,
    width: 11,
    diameter: 13,
    evaluation: 4
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
