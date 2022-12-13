import Category from '../models/category';
import CategotyItem from '../models/item-category';
import { Image } from 'react-native';

export const CATEGORIES = [
    new Category('1', 'Disposal of batteries, lamps and mercury thermometers'),
    new Category('2', 'Disposal of recycled materials'),
    new Category('3', 'Disposal of computer and household appliances'),
    new Category('4', 'Recycling of tires'),
    new Category('5', 'Disposal of clothes'),
    new Category('6', 'Disposal of furniture and building stones'),
];

{/* <Image source={require('../../assets/category-images')}></Image> */}
// new Category('c6', 'Disposal of furniture and building stones', '../../../../assets/category-images/image.jpg'),

export const OPTIONS = [
    new CategotyItem(
      '1',
      ['1'],
      'Batteries',
      'https://picsum.photos/206',
    ),
    new CategotyItem(
      '2',
      ['1'],
      'Lamps',
      'https://picsum.photos/207',
    ),
    new CategotyItem(
      '3',
       ['1'],
      'Thermometers',
      'https://picsum.photos/208',
    ),
    new CategotyItem(
      '4',
       ['2'],
      'Glass bottles',
      'https://picsum.photos/208',
    ),
    new CategotyItem(
      '5',
       ['2'],
      'Plastic',
      'https://picsum.photos/208',
    ),
    new CategotyItem(
      '6',
       ['2'],
      'Paper',
      'https://picsum.photos/208',
    ),
    new CategotyItem(
      '7',
       ['2'],
      'Scrap metal',
      'https://picsum.photos/208',
    ),
    new CategotyItem(
      '8',
       ['3'],
      'Computer and gadgets',
      'https://picsum.photos/208',
    ),
    new CategotyItem(
      '9',
       ['3'],
      'Household appliances',
      'https://picsum.photos/208',
    ),
    new CategotyItem(
      '10',
       ['4'],
      'Tires',
      'https://picsum.photos/208',
    ),
    new CategotyItem(
      '11',
       ['5'],
      'Clothes for recycling',
      'https://picsum.photos/208',
    ),
    new CategotyItem(
      '12',
       ['5'],
      'Clothes for second hand',
      'https://picsum.photos/208',
    ),
    new CategotyItem(
      '13',
       ['6'],
      'Furniture',
      'https://picsum.photos/208',
    ),
    new CategotyItem(
      '14',
       ['6'],
      'Construction waste',
      'https://picsum.photos/208',
    ),


];