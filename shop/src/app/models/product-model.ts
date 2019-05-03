import IProduct from './product.interface';
import {Category} from '../../app/enums';

export  class ProductModel implements IProduct{
    name: string
    description: string
    price: number
    category: Category
    isAvailable: boolean
    constructor(pName: string, pDescription: string, pPrice: number, PCategory: Category, pIsAvailable: boolean) {
        this.name = pName;
        this.description = pDescription;
        this.price = pPrice;
        this.category = PCategory;
        this.isAvailable = pIsAvailable;
    }
}
