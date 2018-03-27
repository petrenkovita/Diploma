import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'new-product-page',
  templateUrl: 'new-product.html'
})
export class NewProductPage {
    prod: String[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.prod = navParams.get('prod');
  
  }
}
