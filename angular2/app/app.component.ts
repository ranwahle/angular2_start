import {Component} from 'angular2/core';
import {Order} from './model/order';
import {OrderService} from './services/order.service';
import {OnInit} from 'angular2/core';
import {OrderDetailComponent} from "./directives/orderDetailComponent";


@Component({
    selector: 'my-app',
    providers: [OrderService],
    template: `
  <h1>{{title}}</h1>
  <div>
  <ul class="orders">
 <li *ngFor="#order of orders"(click)="onSelect(order)">
  <span class="badge" >{{order.id}}</span> {{order.title}}
</li>
</ul>
</div>
<div>
  <my-order-detail [order]="selectedOrder"></my-order-detail>
  </div>

  `,
    styles: [`
  .orders {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
  .orders li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
  .orders li:hover {color: #369; background-color: #EEE; left: .2em;}
  .orders .badge {
    font-size: small;
    color: white;
    padding: 0.1em 0.7em;
    background-color: #369;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -1px;
  }
  .selected { background-color: #EEE; color: #369; }
`],
    directives: [OrderDetailComponent]
})
export class AppComponent implements OnInit {
    constructor(private _ordersService:OrderService) {
    }

    public title = 'Our orders';
    public order:Order = {
        id: 1,
        title: 'Windstorm'
    };

    getOrders() {
        this.orders = this._ordersService.getOrders();
    }

    ngOnInit() {
        this.getOrders();
    }


    public selectedOrder:Order;// = {};
    onSelect(order:Hero) {
        this.selectedOrder = order;
    }


}