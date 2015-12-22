System.registerModule("../todoComponent.js", [], function() {
  "use strict";
  var __moduleName = "../todoComponent.js";
  System.register(['angular2/angular2'], function(exports_1) {
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
    var angular2_1;
    var MyTodo;
    return {
      setters: [function(angular2_1_1) {
        angular2_1 = angular2_1_1;
      }],
      execute: function() {
        MyTodo = (function() {
          function MyTodo() {
            this.todos = ['Item 1'];
          }
          MyTodo = __decorate([angular2_1.Component({
            selector: 'my-todos',
            templateUrl: 'partials/todos.html'
          }), __metadata('design:paramtypes', [])], MyTodo);
          return MyTodo;
        })();
        exports_1("MyTodo", MyTodo);
        angular2_1.bootstrap(MyTodo);
      }
    };
  });
  return {};
});
System.get("../todoComponent.js" + '');
