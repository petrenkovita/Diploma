import { Component } from '@angular/core';

import { NavController, NavParams/* , Platform, Nav  */ } from 'ionic-angular';
//import { PopularPage } from '../popular/popular';
import { SaladPage } from '../salad/salad';
// import { SearchPage } from '../search/search';
import { categories } from '../../api/data';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  model: any ={
    items: [    
    ]
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
    this.model.items = categories.categories;
  }
  /*  goToPopularProduct(event){
     this.navCtrl.push(PopularPage,{
     })
   } */

   goToListPage(category) {
     console.log(category);
    this.navCtrl.push(SaladPage, {categoryId: category.id})
  }
} 






