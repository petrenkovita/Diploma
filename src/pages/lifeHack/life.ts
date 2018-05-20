import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { HackOnePage } from './hask/hask1';


@Component({
  selector: 'life',
  templateUrl: 'life.html'
})
export class LifeHackPage {
    top: String[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.top = navParams.get('top');
  }
  hask1(event){
    this.navCtrl.push(HackOnePage)
  }
}
