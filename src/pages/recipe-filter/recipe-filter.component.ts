import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { filter } from '../../api/filter';
import { DescriptionComponent } from '../description/description.component';

@Component({
  selector: 'filter-page',
  templateUrl: 'recipe-filter.component.html'
})
export class RecipeFilterComponent {

  model: any = {
    items: [
    ]
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.model.items = filter.filter;
  }

  openSearchPage() {
    this.navCtrl.push(SearchPage)
  }

  goToListPage(filtered) {
    this.navCtrl.push(DescriptionComponent, { filteredId: filtered.id })
  }

}





