import Category from '../models/category';
import CategoryItem from '../models/item-category';

export const CATEGORIES = [
  new Category('1', 'Disposal of batteries, lamps and mercury thermometers'),
  new Category('2', 'Disposal of recycled materials'),
  new Category('3', 'Disposal of computer and household appliances'),
  new Category('4', 'Recycling of tires'),
  new Category('5', 'Disposal of clothes'),
  new Category('6', 'Disposal of furniture and building stones'),
];

export const OPTIONS = [
  new CategoryItem('1', ['1'], 'Batteries', 'https://picsum.photos/206'),
  new CategoryItem('2', ['1'], 'Lamps', 'https://picsum.photos/207'),
  new CategoryItem('3', ['1'], 'Thermometers', 'https://picsum.photos/208'),
  new CategoryItem('4', ['2'], 'Glass bottles', 'https://picsum.photos/208'),
  new CategoryItem('5', ['2'], 'Plastic', 'https://picsum.photos/208'),
  new CategoryItem('6', ['2'], 'Paper', 'https://picsum.photos/208'),
  new CategoryItem('7', ['2'], 'Scrap metal', 'https://picsum.photos/208'),
  new CategoryItem(
    '8',
    ['3'],
    'Computer and gadgets',
    'https://picsum.photos/208'
  ),
  new CategoryItem(
    '9',
    ['3'],
    'Household appliances',
    'https://picsum.photos/208'
  ),
  new CategoryItem('10', ['4'], 'Tires', 'https://picsum.photos/208'),
  new CategoryItem(
    '11',
    ['5'],
    'Clothes for recycling',
    'https://picsum.photos/208'
  ),
  new CategoryItem(
    '12',
    ['5'],
    'Clothes for second hand',
    'https://picsum.photos/208'
  ),
  new CategoryItem('13', ['6'], 'Furniture', 'https://picsum.photos/208'),
  new CategoryItem(
    '14',
    ['6'],
    'Construction waste',
    'https://picsum.photos/208'
  ),
];
