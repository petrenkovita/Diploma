import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'recipe1',
  templateUrl: 'recipe1.html',
  styles: ['span.time {color:#ffa400};' ]
})
export class RecipeOnePage {
    top: String[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.top = navParams.get('top');
  
  }
}
