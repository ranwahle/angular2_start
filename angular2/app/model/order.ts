/**
 * Created by ranwahle on 18/12/2015.
 */
import {Prodcut} from './product';

export interface Order {
    id: number;
    title: string;
    product: Prodcut,
    quantity: number,
    products: Product[]
}
