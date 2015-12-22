/**
 * Created by ranwahle on 18/12/2015.
 */
(function (angular) {
    var module = angular.module('ordersApp.directives.orderDetails', ['ordersApp.services.productService', 'ordersApp.filters.availableProducts']);
    module.controller('orderDetailsController', ['$scope', 'productService', function ($scope, productService) {
            this.products = productService.getProducts();
            this.setSelectedProduct = function (product) {
                $scope.order.product = product;
            };
            this.addProduct = function (product) {
                $scope.order.products = $scope.order.products || [];
                $scope.order.products.push(product);
            };
            this.removeProduct = function (product) {
                $scope.order.products = $scope.order.products || [];
                $scope.order.products.splice($scope.order.products.indexOf(product), 1);
            };
        }]);
    module
        .directive('myOrderDetail', [function () {
            return {
                scope: {
                    order: '='
                },
                template: " <div ng-if=\"order\">\n                <h2>{{order.title}} details!</h2>\n    <div><label>id: </label>{{order.id}}</div>\n    <div>\n        <label>name: </label>\n    <input ng-model=\"order.title\" placeholder=\"title\"/>\n    </div>\n        <div class=\"productsDiv\">\n       <label>Products</label>\n    <ul>\n    <li data-ng-repeat=\"product in order.products\" ><span data-ng-bind=\"product.title\"></span>\n    <a href=\"javascript:void(0)\" data-ng-click=\"orderDetailsController.removeProduct(product)\">\n    <span class=\"glyphicon glyphicon-minus\"></span> </a>\n     </li>\n    </ul>\n    </div>\n        <div class=\"productsDiv\">\n    <label>Available Product</label>\n    <ul>\n        <li ng-repeat=\"product in orderDetailsController.products | availableProducs:order\">\n    <a href=\"javascript:void(0)\" data-ng-bind=\"product.title\" data-ng-click=\"orderDetailsController.setSelectedProduct(product)\"></a>\n    <a href=\"javascript:void(0)\" data-ng-click=\"orderDetailsController.addProduct(product)\"><span  class=\"glyphicon glyphicon-plus\"></span></a>\n        </li>\n        </ul>\n       </div>\n        <span data-ng-if=\"order.product\" data-ng-bind=\"order.product.description\" ></span>",
                controller: 'orderDetailsController',
                controllerAs: 'orderDetailsController'
            };
        }]);
}(window.angular));
//# sourceMappingURL=orderDetailComponent.js.map