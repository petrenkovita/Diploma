import { Component } from '@angular/core';


import { AdvisePage } from '../advise/advise';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { LifeHackPage } from '../lifeHack/life';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    HomeTab = HelloIonicPage;
    AdviseTab = AdvisePage;
    LifeHackTab = LifeHackPage;

    constructor() {

    }
} 