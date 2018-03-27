import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'categories-page',
  templateUrl: 'categories.html'
})
export class CategoriesPage {
    category: String[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.category = navParams.get('category');
  
  }
}
