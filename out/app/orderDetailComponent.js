System.registerModule("../../app/orderDetailComponent.js", [], function() {
  "use strict";
  var __moduleName = "../../app/orderDetailComponent.js";
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
    var OrderDetailComponent;
    return {
      setters: [function(core_1_1) {
        core_1 = core_1_1;
      }],
      execute: function() {
        OrderDetailComponent = (function() {
          function OrderDetailComponent() {}
          OrderDetailComponent = __decorate([core_1.Component({
            selector: 'my-order-detail',
            template: "\n  <div *ngIf=\"order\">\n    <h2>{{order.title}} details!</h2>\n    <div><label>id: </label>{{order.id}}</div>\n    <div>\n      <label>name: </label>\n      <input [(ngModel)]=\"order.title\" placeholder=\"title\"/>\n    </div>\n  </div>\n",
            inputs: ['order']
          }), __metadata('design:paramtypes', [])], OrderDetailComponent);
          return OrderDetailComponent;
        })();
        exports_1("OrderDetailComponent", OrderDetailComponent);
      }
    };
  });
  return {};
});
System.get("../../app/orderDetailComponent.js" + '');
