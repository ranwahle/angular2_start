/**
 * Created by ranwahle on 21/12/2015.
 */
(function(angular) {

    var module = angular.module('ordersApp.services.productService',[]);
    class ProductService {

        getProducts() {
            return [
                {
                    id: 1, title: 'Angular 2.0 service',
                    description: 'Angular 2.0 service'
                },
                {
                    id: 2, title: 'Angular 2.0 pipe',
                    description: 'Angular 2.0 pipe'
                },
                {
                    id: 3, title: 'Angular 2.0 directive',
                    description: 'Angular 2.0 directive'
                }
            ]
        }
    }
    module.service('productService',[ProductService
    //    function()
    //{
    //    this.getProducts = function()
    //    {
    //        return [
    //            {id: 1, title: 'Angular 1.x sercice',
    //                description: 'Angular 1.x sercce'
    //            },
    //            {id: 2, title: 'Angular 1.x filter',
    //                description: 'Angular 1.x filter'
    //            }
    //        ];
    //    };
    //}
    ]);

}(window.angular));

