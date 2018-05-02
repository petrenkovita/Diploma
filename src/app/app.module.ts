import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler/* , DeepLinker */ } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PopularPage } from '../pages/popular/popular';
import { SaladPage } from '../pages/salad/salad';
import { DesertsPage } from '../pages/deserts/deserts';
import { SoupsPage } from '../pages/soups/soups';
import { BakeryPage } from '../pages/bakery/bakery';
import { DrinksPage } from '../pages/drinks/drinks';
import { RecipeOnePage } from '../pages/bakery/recipe1';
import { SearchPage } from '../pages/search/search';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    PopularPage,
    SaladPage,
    DesertsPage,
    SoupsPage,
    BakeryPage,
    DrinksPage,
    RecipeOnePage,
    SearchPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: BakeryPage, name:'Bakery', segment:'bakery'},
        { component: DesertsPage, name:'Desert', segment:'desert', defaultHistory: [HelloIonicPage]},
        { component: SaladPage, name:'Salad', segment:'salad'},
        { component: SoupsPage, name:'Soup', segment:'soup'},
        { component: HelloIonicPage, name:'HelloIonic', segment:'cookWithPleasure'}

      ]
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    PopularPage,
    SaladPage,
    DesertsPage,
    SoupsPage,
    BakeryPage,
    DrinksPage,
    RecipeOnePage,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
/*     DeepLinker,
 */    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
