System.registerModule("../../app/app.component.js", [], function() {
  "use strict";
  var __moduleName = "../../app/app.component.js";
  System.register(['angular2/core', './services/order.service', "./directives/orderDetailComponent"], function(exports_1) {
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
    var core_1,
        order_service_1,
        orderDetailComponent_1;
    var AppComponent;
    return {
      setters: [function(core_1_1) {
        core_1 = core_1_1;
      }, function(order_service_1_1) {
        order_service_1 = order_service_1_1;
      }, function(orderDetailComponent_1_1) {
        orderDetailComponent_1 = orderDetailComponent_1_1;
      }],
      execute: function() {
        AppComponent = (function() {
          function AppComponent(_ordersService) {
            this._ordersService = _ordersService;
            this.title = 'Tour of Heroes';
            this.order = {
              id: 1,
              title: 'Windstorm'
            };
          }
          AppComponent.prototype.getOrders = function() {
            this.orders = this._ordersService.getOrders();
          };
          AppComponent.prototype.ngOnInit = function() {
            this.getOrders();
          };
          AppComponent.prototype.onSelect = function(order) {
            this.selectedOrder = order;
          };
          AppComponent = __decorate([core_1.Component({
            selector: 'my-app',
            providers: [order_service_1.OrderService],
            template: "\n  <h1>{{title}}</h1>\n  <my-order-detail [order]=\"selectedOrder\"></my-order-detail>\n  <!--<div *ngIf=\"selectedHero\">-->\n  <!--<h2>{{selectedHero.name}} details!</h2>-->\n  <!--<div><label>id: </label>{{selectedHero.id}}</div>-->\n  <!--<div><label>name: </label>{{selectedHero.name}}</div>-->\n  <!--<input [(ngModel)]=\"selectedHero.name\" placeholder=\"name\">-->\n<!--</div>-->\n  <ul class=\"orders\">\n <li *ngFor=\"#order of orders\"(click)=\"onSelect(order)\">\n  <span class=\"badge\" >{{order.id}}</span> {{order.title}}\n</li>\n\n  ",
            styles: ["\n  .orders {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}\n  .orders li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }\n  .orders li:hover {color: #369; background-color: #EEE; left: .2em;}\n  .orders .badge {\n    font-size: small;\n    color: white;\n    padding: 0.1em 0.7em;\n    background-color: #369;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -1px;\n  }\n  .selected { background-color: #EEE; color: #369; }\n"],
            directives: [orderDetailComponent_1.OrderDetailComponent]
          }), __metadata('design:paramtypes', [order_service_1.OrderService])], AppComponent);
          return AppComponent;
        })();
        exports_1("AppComponent", AppComponent);
      }
    };
  });
  return {};
});
System.get("../../app/app.component.js" + '');
