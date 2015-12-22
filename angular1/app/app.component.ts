(function (angular) {
    var module = angular.module('ordersApp', ['ordersApp.services.productService', 'ordersApp.services.orderService',
        'ordersApp.directives.orderDetails']);

    module.controller('appController', ['orderService', function (ordersService) {
        var getOrders = function () {
            this.orders = ordersService.getOrders();

        };

        this.onSelect = function (order) {
            this.selectedOrder = order;
        };

        getOrders.call(this);

    }]);

    module.directive('myApp', [function () {
        return {
            template: `
  <h1>{{title}}</h1>

  <div>
  <ul class="orders">
 <li ng-repeat="order in appController.orders" data-ng-click="appController.onSelect(order)">
  <span class="badge" >{{order.id}}</span> {{order.title}}
</li>
</ul>
</div>

  <div>
  <my-order-detail order="appController.selectedOrder"></my-order-detail>
  </div>

  `,

            controller: 'appController',
            controllerAs: 'appController'
        };
    }]);

    angular.element(document).ready(function () {
        angular.bootstrap(document.body, ['ordersApp']);
    });

}(window.angular));
