/**
 * Created by ranwahle on 18/12/2015.
 */
(function (angular) {
    var module = angular.module('ordersApp.directives.orderDetails',
        ['ordersApp.services.productService','ordersApp.filters.availableProducts']);

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
                template: ` <div ng-if="order">
                <h2>{{order.title}} details!</h2>
    <div><label>id: </label>{{order.id}}</div>
    <div>
        <label>name: </label>
    <input ng-model="order.title" placeholder="title"/>
    </div>
        <div class="productsDiv">
       <label>Products</label>
    <ul>
    <li data-ng-repeat="product in order.products" ><span data-ng-bind="product.title"></span>
    <a href="javascript:void(0)" data-ng-click="orderDetailsController.removeProduct(product)">
    <span class="glyphicon glyphicon-minus"></span> </a>
     </li>
    </ul>
    </div>
        <div class="productsDiv">
    <label>Available Product</label>
    <ul>
        <li ng-repeat="product in orderDetailsController.products | availableProducs:order">
    <a href="javascript:void(0)" data-ng-bind="product.title" data-ng-click="orderDetailsController.setSelectedProduct(product)"></a>
    <a href="javascript:void(0)" data-ng-click="orderDetailsController.addProduct(product)"><span  class="glyphicon glyphicon-plus"></span></a>
        </li>
        </ul>
       </div>
        <span data-ng-if="order.product" data-ng-bind="order.product.description" ></span>`
                ,
                controller: 'orderDetailsController',
                controllerAs: 'orderDetailsController'
            };
        }]);

}(window.angular));

