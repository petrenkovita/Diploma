import { Component } from '@angular/core';
import { CategoriesPage } from '../categories/categories';

import { NavController, NavParams } from 'ionic-angular';
import { NewProductPage } from '../new-product/new-product';
import { TopSelingProductPage } from '../top-seling/top-seling';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  bar:string;
  items; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'Apple',
      'Samsung',
      'Huawei',
      'Windows Phone' 
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    };  
  }

  goToCategories(event){
    this.navCtrl.push(CategoriesPage,{ 
    })
  }
  
  goToTopSelingProduct(event){
    this.navCtrl.push(TopSelingProductPage,{

    })
  }

  goToNewProductPage(event){
    this.navCtrl.push(NewProductPage,{

    })
  }
}