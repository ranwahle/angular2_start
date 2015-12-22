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
                template: "\n  <h1>{{title}}</h1>\n\n  <div>\n  <ul class=\"orders\">\n <li ng-repeat=\"order in appController.orders\" data-ng-click=\"appController.onSelect(order)\">\n  <span class=\"badge\" >{{order.id}}</span> {{order.title}}\n</li>\n</ul>\n</div>\n\n  <div>\n  <my-order-detail order=\"appController.selectedOrder\"></my-order-detail>\n  </div>\n\n  ",
                controller: 'appController',
                controllerAs: 'appController'
            };
        }]);
    angular.element(document).ready(function () {
        angular.bootstrap(document.body, ['ordersApp']);
    });
}(window.angular));
//# sourceMappingURL=app.component.js.map