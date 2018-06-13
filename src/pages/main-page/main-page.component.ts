import { Component } from '@angular/core';

import { NavController, NavParams/* , Platform, Nav  */ } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { categories } from '../../api/data';
import { CategoriesPageComponent } from '../categories/categories.component';

@Component({
  selector: 'main-page',
  templateUrl: 'main-page.component.html'
})
export class MainPageComponent {

  model: any ={
    items: [  
    ]
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
    this.model.items = categories.categories;
  }

  openSearchPage(){
    this.navCtrl.push(SearchPage)
  }

   goToListPage(category) {
    this.navCtrl.push(CategoriesPageComponent, {categoryId: category.id})
  }
  
} 





