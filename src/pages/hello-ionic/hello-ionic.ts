import { Component } from '@angular/core';
import { CategoriesPage } from '../categories/categories';

import { NavController, NavParams } from 'ionic-angular';
import { PopularPage } from '../popular/popular';
import { SaladPage } from '../salad/salad';
import { DesertsPage } from '../deserts/deserts';
import { SoupsPage } from '../soups/soups';
import { BakeryPage } from '../bakery/bakery';

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

  goToPopularProduct(event){
    this.navCtrl.push(PopularPage,{

    })
  }
  
  goToSaladPage(event){
    this.navCtrl.push(SaladPage,{

    })
  }

  goToDesertsPage(event){
    this.navCtrl.push(DesertsPage)
  }

  goToSoupsPage(event){
    this.navCtrl.push(SoupsPage)
  }

  goToBakeryPage(event){
    this.navCtrl.push(BakeryPage)
  }

 
}