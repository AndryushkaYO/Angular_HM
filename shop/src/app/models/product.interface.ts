import {Category} from '../../app/enums';

export default interface IProduct{
    name: string
    description: string
    price: number
    category: Category
    isAvailable: boolean
}
