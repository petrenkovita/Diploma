import { Component } from '@angular/core';


import { AdvisePage } from '../advise/advise';
import { LifeHackPage } from '../lifeHack/life';
import { MainPageComponent } from '../main-page/main-page.component';
import { RecipeFilterComponent } from '../recipe-filter/recipe-filter.component';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    HomeTab = MainPageComponent;
    FilterTab = RecipeFilterComponent;
    AdviseTab = AdvisePage;
    LifeHackTab = LifeHackPage;

    constructor() {

    }
} 