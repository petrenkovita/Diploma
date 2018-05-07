import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { RecipeOnePage } from './recipe1';


@Component({
  selector: 'bakery',
  templateUrl: 'bakery.html'
})
export class BakeryPage {
    top: String[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.top = navParams.get('top');
  
  }
  goToRecipeOnePage(event){
    this.navCtrl.push(RecipeOnePage)
  }
}