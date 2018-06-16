import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { categories } from '../../api/data';
import { HttpClient } from '@angular/common/http';
import { DefinitionComponent } from '../def/def.component';
import { baseUrl } from '../../app/http.client';

@Component({
  selector: 'category',
  templateUrl: 'categories.component.html'
})
export class CategoriesPageComponent implements OnInit {
  reciepts: any = [];
  category: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    const id = navParams.data.categoryId;
    console.log('category id :', navParams.data.categoryId);

    this.category = categories.categories.find((cat) => {
      return cat.id == id;
    });
  }

  ngOnInit(): void {
    this.http.get(baseUrl + this.category["searchString"])
      .subscribe((result: any) => {
        const { matches } = result;
        this.reciepts = matches;
        console.log('result of http call:', result)
      });
  }

  openDescriptionPage() {
    this.navCtrl.push(DefinitionComponent)
  }
}