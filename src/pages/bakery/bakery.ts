import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { RecipeOnePage } from './recipe1';


@Component({
  selector: 'bakery',
  templateUrl: 'bakery.html'
})
export class BakeryPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  goToRecipeOnePage(event){
    this.navCtrl.push(RecipeOnePage)
  }
}
