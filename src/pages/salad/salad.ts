import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { categories } from '../../api/data';


@Component({
  selector: 'salad',
  templateUrl: 'salad.html'
})
export class SaladPage {

  reciepts: any  = [];
  category: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param

const id = navParams.data.categoryId;
    console.log('category id :',navParams.data.categoryId);

    this.category = categories.categories.find((cat)=>{
      return cat.id == id;
    });


    this.reciepts = this.category.items;
  }

  goToDetails(item: any){
    console.log(item);
  }
}
