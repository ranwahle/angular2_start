System.registerModule("../../../app/services/product.service.js", [], function() {
  "use strict";
  var __moduleName = "../../../app/services/product.service.js";
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
    var ProductService;
    return {
      setters: [function(core_1_1) {
        core_1 = core_1_1;
      }],
      execute: function() {
        ProductService = (function() {
          function ProductService() {}
          ProductService.prototype.getProducts = function() {
            return [{
              id: 1,
              title: 'SDP ticket',
              description: 'Ticket to 2nd day, tool track'
            }, {
              id: 2,
              title: 'SDP ticket',
              description: 'Ticket to 2nd day, fun track'
            }];
          };
          ProductService = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [])], ProductService);
          return ProductService;
        })();
        exports_1("ProductService", ProductService);
      }
    };
  });
  return {};
});
System.get("../../../app/services/product.service.js" + '');
