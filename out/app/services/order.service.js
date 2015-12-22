System.registerModule("../../../app/services/order.service.js", [], function() {
  "use strict";
  var __moduleName = "../../../app/services/order.service.js";
  System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
      else
        for (var i = decorators.length - 1; i >= 0; i--)
          if (d = decorators[i])
            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function(k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
    };
    var core_1;
    var ORDERS,
        OrderService;
    return {
      setters: [function(core_1_1) {
        core_1 = core_1_1;
      }],
      execute: function() {
        exports_1("ORDERS", ORDERS = [{
          "id": 11,
          "title": "Mr. Nice",
          product: {
            id: 1,
            title: 'SDP ticket',
            description: 'The tool track'
          }
        }, {
          "id": 12,
          "title": "Narco"
        }, {
          "id": 13,
          "title": "Bombasto"
        }, {
          "id": 14,
          "title": "Celeritas"
        }, {
          "id": 15,
          "title": "Magneta"
        }, {
          "id": 16,
          "title": "RubberMan"
        }, {
          "id": 17,
          "title": "Dynama"
        }, {
          "id": 18,
          "title": "Dr IQ"
        }, {
          "id": 19,
          "title": "Magma"
        }, {
          "id": 20,
          "title": "Tornado"
        }]);
        OrderService = (function() {
          function OrderService() {}
          OrderService.prototype.getOrders = function() {
            return ORDERS;
          };
          OrderService = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [])], OrderService);
          return OrderService;
        })();
        exports_1("OrderService", OrderService);
      }
    };
  });
  return {};
});
System.get("../../../app/services/order.service.js" + '');
