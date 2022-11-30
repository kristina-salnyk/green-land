import {mocks} from './mock';
import camelize from 'camelize';

export const categoriesRequest = (name) => {
  return new Promise((resolve, reject)=>{
    const mock = mocks[name];
    if(!mock) {
      reject ('not found');
    }   
    resolve(mock);
  });
};


export const categoriesTransform =  ({results =[]}) =>{
  const mappedResults = results.map((category) =>{
        
    return{
      ...category,

    };
  });
  return camelize(mappedResults);
};

