import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { categories } from '../../api/data';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'category',
  templateUrl: 'categories.component.html'
})
export class CategoriesPageComponent implements OnInit {

  /*   matches = {
     sourceDisplayName: 'string',
     ingredients: 'string',
     smallImageUrls: 'string',
     totalTimeInSeconds: 'number'
   };   */
  reciepts: any = [];
  category: any;
  urls: string = "http://api.yummly.com/v1/api/recipes?_app_id=726f2fd1&_app_key=f942650ffcb77bab53f48d4cfb628a1b&q=";
  public elements: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    const id = navParams.data.categoryId;
    console.log('category id :', navParams.data.categoryId);

    this.category = categories.categories.find((cat) => {
      return cat.id == id;
    });
  }

  ngOnInit(): void {
    this.http.get('http://api.yummly.com/v1/api/recipes?_app_id=726f2fd1&_app_key=f942650ffcb77bab53f48d4cfb628a1b&q=' + this.category["searchString"])
      .subscribe((result: any) => {
        const { matches } = result;
        this.reciepts = matches;
        console.log('result of http call:', result)
      });
  }

  /*  openDescriptionPage() {
    this.navCtrl.push(DescriptionComponent)
  }  */
}

interface IReciept {
  recipeName: string,
  rating: number
}