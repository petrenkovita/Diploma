import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'advise',
  templateUrl: 'advise.html'
})
export class AdvisePage {
    top: String[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.top = navParams.get('top');
  
  }
  
}
