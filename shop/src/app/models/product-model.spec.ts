import  {ProductModel}  from './product-model';
import {Category} from '../../app/enums';

describe('ProductModel', () => {
  it('should create an instance', () => {
    expect(new ProductModel('','',0,Category.Book,false)).toBeTruthy();
  });
});
