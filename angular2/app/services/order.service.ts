/**
 * Created by ranwahle on 20/12/2015.
 */
import {Injectable} from 'angular2/core';
import {Order} from './model/order';
import {Prodcut} from './model/product'

export var ORDERS: Order[] = [
    { "id": 11, "title": "Order # 1"},
    { "id": 12, "title": "Order # 2" },
    { "id": 13, "title": "Order # 3" },
    { "id": 14, "title": "Order # 4" },
    { "id": 15, "title": "Order # 5" }

];

@Injectable()
export class OrderService {

    getOrders() {
        return ORDERS;
    }



}