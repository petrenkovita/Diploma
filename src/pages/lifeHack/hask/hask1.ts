import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'hask1',
  templateUrl: 'hask1.html'
})
export class HackOnePage {
    top: String[];
    nameHask: object[    
        
    ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.top = navParams.get('top');
  }
 
}
