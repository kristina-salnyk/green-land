import Category from '../models/category';
import CategotyItem from '../models/item-category';

export const CATEGORIES = [
    new Category('c1', 'Disposal of batteries, lamps and mercury thermometers', 'https://picsum.photos/200'),
    new Category('c2', 'Disposal of recycled materials', 'https://picsum.photos/201'),
    new Category('c3', 'Disposal of computer and household appliances', 'https://picsum.photos/202'),
    new Category('c4', 'Recycling of tires', 'https://picsum.photos/203'),
    new Category('c5', 'Disposal of clothes', 'https://picsum.photos/204'),
    new Category('c6', 'Disposal of furniture and building stones', 'https://picsum.photos/205'),
];


export const OPTIONS = [
    new CategotyItem(
      'op1',
      ['c1'],
      'Batteries',
      'https://picsum.photos/206',
    ),
    new CategotyItem(
      'op2',
      ['c1'],
      'Lamps',
      'https://picsum.photos/207',
    ),
    new CategotyItem(
      'op3',
       ['c1'],
      'Thermometers',
      'https://picsum.photos/208',
    )
];