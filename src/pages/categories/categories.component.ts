import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { categories } from '../../api/data';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../../app/http.client';
import { IRecipe, ICategory } from '../../interface.shared';
import { DetailsComponent } from '../details.component/details.component';

@Component({
  selector: 'category',
  templateUrl: 'categories.component.html'
})

export class CategoriesPageComponent implements OnInit {
  reciepts: IRecipe[] = [];
  category: ICategory;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    const id = navParams.data.categoryId;

    this.category = categories.categories.find((cat) => {
      return cat.id == id;
    });
  }

  ngOnInit(): void {
    this.http.get(baseUrl + '&q=' + this.category.searchString)
      .subscribe((result: any) => {
        const { matches } = result;
        this.reciepts = matches;
        console.log(this.reciepts)
      });
  }

  openDescriptionPage(recipe: IRecipe) {
    this.navCtrl.push(DetailsComponent, {
      id: recipe.id
    })
  }
}