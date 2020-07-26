import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { CardViewComponent } from './components/card-view/card-view.component';
import { EmptyViewComponent } from './components/empty-view/empty-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavigationComponent,
    CardViewComponent,
    EmptyViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
