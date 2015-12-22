/**
 * Created by ranwahle on 21/12/2015.
 */

import {Injectable} from 'angular2/core';

@Injectable()
export class ProductService{

    getProducts()
    {
        return [
            {id: 1, title: 'Angular 2.0 service',
                description: 'Angular 2.0 service'
            },
            {id: 2, title: 'Angular 2.0 pipe',
                description: 'Angular 2.0 pipe'
            },
            {id: 3, title: 'Angular 2.0 directive',
                description: 'Angular 2.0 directive'
            }
        ]
    }
}