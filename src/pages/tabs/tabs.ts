import { Component } from '@angular/core';


import { AdvisePage } from '../advise/advise';
import { LifeHackPage } from '../lifeHack/life';
import { MainPageComponent } from '../main-page/main-page.component';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    HomeTab = MainPageComponent;
    AdviseTab = AdvisePage;
    LifeHackTab = LifeHackPage;

    constructor() {

    }
} 