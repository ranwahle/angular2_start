/**
 * Created by ranwahle on 22/12/2015.
 */
import {Pipe} from 'angular2/core';
import {Product} from '../model/product';
import {Order} from '../model/order';
//PipeTransform
@Pipe({
    name: 'availableProducts'
})

export class AvailableProductsPipe {
    transform(value: Product[], args: any[]) {
        var result : Product[] = [],
            order: Order = args[0];

        var products = order.products || [];

        value.forEach(product => {
           var existInOrder =  products.filter(orderProduct => product.id === orderProduct.id);
            if (existInOrder.length === 0)
            {
                result.push(product);
            }
        });

        return result;

    }
}