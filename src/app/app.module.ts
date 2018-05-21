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

import { AngularFireModule } from 'angularfire2';
import { CategoriesPageComponent } from '../pages/categories/categories.component';

export const firebaseConfig =
  {
    apiKey: "AIzaSyDJA8wnERFx5vam1hFMsV08VUEamOzrw84",
    authDomain: "my-diplom-project-1080f.firebaseapp.com",
    databaseURL: "https://my-diplom-project-1080f.firebaseio.com",
    projectId: "my-diplom-project-1080f",
    storageBucket: "my-diplom-project-1080f.appspot.com",
    messagingSenderId: "444482163608"
  };

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
    AngularFireModule.initializeApp(firebaseConfig),
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
