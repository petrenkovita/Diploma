import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { categories } from '../../api/data';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'category',
    templateUrl: 'categories.component.html'
})
export class CategoriesPageComponent {

    reciepts: any = [];
    category: any;
    searchString: string = "http://api.yummly.com/v1/api/recipes?_app_id=726f2fd1&_app_key=f942650ffcb77bab53f48d4cfb628a1b&q=";

    constructor(public navCtrl: NavController, public navParams: NavParams, public HttpClient: HttpClient) {

        const id = navParams.data.categoryId;
        console.log('category id :', navParams.data.categoryId);

        this.category = categories.categories.find((cat) => {
            return cat.id == id;
        });

        this.reciepts = this.getPosts["searchString"]; // getPost ()
        console.log(this.reciepts)
    }

    getPosts() {
        return this.HttpClient.get(this.searchString)
    }

    goToDetails(item: any) {
        console.log(item);
    }
}
