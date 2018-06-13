import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'advise',
  templateUrl: 'advise.html'
})
export class AdvisePage {

  model: IAdvice = {
    title: '20 Tips for a Better Kitchen',
    items: [
      { description: '' },
      { description: '' },
      { description: '' },
      { description: '' },
      { description: '' },
      { description: '' },
      { description: '' },
      { description: '' },
      { description: '' },
      { description: '' },
      { description: '' },
      { description: '' },
      { description: '' },
      { description: '' },
      { description: '' },
      { description: '' },
      { description: '' },
      { description: '' },
      { description: '' },
      { description: '' },
      { description: '' },
    ]
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

}
interface IAdvice {
  title: string,
  items: IItem[]
}
interface IItem {
  description: string
}
