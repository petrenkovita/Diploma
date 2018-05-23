import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler/* , DeepLinker */ } from 'ionic-angular';
import { MyApp } from './app.component';

import { MainPageComponent } from '../pages/main-page/main-page.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PopularPage } from '../pages/popular/popular';
import { SearchPage } from '../pages/search/search';
import { AdvisePage } from '../pages/advise/advise';
import { LifeHackPage } from '../pages/lifeHack/life';
import { TabsPage } from '../pages/tabs/tabs';
import { HackOnePage } from '../pages/lifeHack/hask/hask1';

import { CategoriesPageComponent } from '../pages/categories/categories.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MyApp,
    MainPageComponent,
    PopularPage,
    CategoriesPageComponent,
    SearchPage,
    AdvisePage,
    LifeHackPage,
    TabsPage,
    HackOnePage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: CategoriesPageComponent, name: 'categories', segment: 'categories' },
        { component: MainPageComponent, name: 'HelloIonic', segment: 'cookWithPleasure' }

      ]
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPageComponent,
    PopularPage,
    CategoriesPageComponent,
    SearchPage,
    AdvisePage,
    LifeHackPage,
    TabsPage,
    HackOnePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
/*     DeepLinker,
 */    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
