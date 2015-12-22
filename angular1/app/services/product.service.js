/**
 * Created by ranwahle on 21/12/2015.
 */
(function (angular) {
    var module = angular.module('ordersApp.services.productService', []);
    var ProductService = (function () {
        function ProductService() {
        }
        ProductService.prototype.getProducts = function () {
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
            ];
        };
        return ProductService;
    })();
    module.service('productService', [ProductService
    ]);
}(window.angular));
//# sourceMappingURL=product.service.js.map