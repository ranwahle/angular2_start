(function (angular) {
    var module = angular.module('ordersApp.services.orderService', []);
    module.service('orderService', [function () {
            var orders = [
                { "id": 11, "title": "Order # 1" },
                { "id": 12, "title": "Order # 2" },
                { "id": 13, "title": "Order # 3" },
                { "id": 14, "title": "Order # 4" },
                { "id": 15, "title": "Order # 5" }
            ];
            this.getOrders = function () {
                return orders;
            };
        }]);
}(window.angular));
//# sourceMappingURL=order.service.js.map