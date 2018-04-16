import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PopularPage } from '../pages/popular/popular';
import { SaladPage } from '../pages/salad/salad';
import { DesertsPage } from '../pages/deserts/deserts';
import { SoupsPage } from '../pages/soups/soups';
import { BakeryPage } from '../pages/bakery/bakery';
import { DrinksPage } from '../pages/drinks/drinks';
import { RecipeOnePage } from '../pages/bakery/recipe1';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    PopularPage,
    SaladPage,
    DesertsPage,
    SoupsPage,
    BakeryPage,
    DrinksPage,
    RecipeOnePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    PopularPage,
    SaladPage,
    DesertsPage,
    SoupsPage,
    BakeryPage,
    DrinksPage,
    RecipeOnePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
