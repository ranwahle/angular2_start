/**
 * Created by ranwahle on 22/12/2015.
 */
(function (angular) {
    var transformFilter = function () {
        return function (value, args) {
            var result = [], order = args;
            var products = order.products || [];
            value.forEach(function (product) {
                var existInOrder = products.filter(function (orderProduct) { return product.id === orderProduct.id; });
                if (existInOrder.length === 0) {
                    result.push(product);
                }
            });
            return result;
        };
    };
    var module = angular.module('ordersApp.filters.availableProducts', []);
    module.filter('availableProducs', [transformFilter]);
}(window.angular));
//# sourceMappingURL=availableProductsFilter.js.map