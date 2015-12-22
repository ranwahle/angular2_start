/**
 * Created by ranwahle on 18/12/2015.
 */

import {Order} from './order';
import {Component,View, Pipe} from 'angular2/core';
import {ProductService} from '../services/product.service';
import {AvailableProductsPipe} from '../pipes/availableProductsPipe';
//import AvailablePrductsPipe from "../pipes/availablePrductsPipe";
@Component({
    selector: 'my-order-detail',
    providers: [ProductService],


    inputs: ['order'],

})
@View({
    template: `
  <div *ngIf="order">
    <h2>{{order.title}} details!</h2>
    <div><label>id: </label>{{order.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="order.title" placeholder="title"/>
      </div>
        <div class="productsDiv">
        <label>Products</label>
      <ul>

    <li *ngFor="#orderProduct of order.products" ><span [textContent]="orderProduct.title"></span>
    <a href="javascript:void(0)" (click)="removeProduct(orderProduct)">
    <span class="glyphicon glyphicon-minus"></span> </a>
     </li>
    </ul>
    </div>

    <div class="productsDiv">
    <label>Available Products</label>
    <ul>
    <li *ngFor="#product of products | availableProducts:order">
    <a href="javascript:void(0)" [textContent]="product.title" (click)="setSelectedProduct(product)"></a>
    <a href="javascript:void(0)" (click)="addProduct(product)">
    <span  class="glyphicon glyphicon-plus"></span></a>

    </li>
    </ul>
    </div>
      <span *ngIf="order.product">{{order.product.description}}</span>
  </div>
`,
    pipes: [AvailableProductsPipe]
})
export class OrderDetailComponent implements OnInit {
    constructor(private _productService:ProductService) {

    }

    addProduct(product) {
        this.order.products = this.order.products || [];
        this.order.products.push(product);
        this.products = this._productService.getProducts();

    }

    removeProduct(product) {
        this.order.products.splice(this.order.products.indexOf(product), 1);
        this.products = this._productService.getProducts();
    }

    setSelectedProduct(product) {
        this.order.product = product;
    }

    public order:Order;


    ngOnInit() {
        this.products = this._productService.getProducts();
    }
}

