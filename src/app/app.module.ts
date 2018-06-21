import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MainPageComponent } from '../pages/main-page/main-page.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SearchPage } from '../pages/search/search';
import { AdvisePage } from '../pages/advise/advise';
import { LifeHackPage } from '../pages/lifeHack/life';
import { TabsPage } from '../pages/tabs/tabs';
import { CategoriesPageComponent } from '../pages/categories/categories.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { DescriptionComponent } from '../pages/description/description.component';
import { RecipeFilterComponent } from '../pages/recipe-filter/recipe-filter.component';
import { DetailsComponent } from '../pages/details.component/details.component';

@NgModule({
  declarations: [
    MyApp,
    MainPageComponent,
    CategoriesPageComponent,
    SearchPage,
    AdvisePage,
    LifeHackPage,
    TabsPage,
    DescriptionComponent,
    RecipeFilterComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: CategoriesPageComponent, name: 'categories', segment: 'categories' },
        { component: MainPageComponent, name: 'HelloIonic', segment: 'cookWithPleasure' },
        { component: DescriptionComponent, name: 'recipe', segment: 'recipe' }
      ]
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPageComponent,
    CategoriesPageComponent,
    SearchPage,
    AdvisePage,
    LifeHackPage,
    TabsPage,
    DescriptionComponent,
    RecipeFilterComponent,
    DetailsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
/*     DeepLinker,
 */    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }