import {Http} from '@angular/http';
import {categories} from '../../api/data';
import {Component} from '@angular/core';
import {NavParams, NavController} from 'ionic-angular';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  items;
  reciepts: any = [];
  category: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

    this.initializeItems();
  }

  initializeItems() {
    this.items = this.reciepts;
    this.items = categories["categories"];
    console.log(this.items);
  }

  getItems(ev) {
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item["name"].toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
