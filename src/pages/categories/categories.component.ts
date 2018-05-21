import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { categories } from '../../api/data';


@Component({
    selector: 'category',
    templateUrl: 'categories.component.html'
})
export class CategoriesPageComponent {

    reciepts: any = [];
    category: any;
    constructor(public navCtrl: NavController, public navParams: NavParams) {

        const id = navParams.data.categoryId;
        console.log('category id :', navParams.data.categoryId);

        this.category = categories.categories.find((cat) => {
            return cat.id == id;
        });

        this.reciepts = this.category.items;
    }

    goToDetails(item: any) {
        console.log(item);
    }
}
