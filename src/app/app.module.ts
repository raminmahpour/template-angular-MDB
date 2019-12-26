import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppmenuComponent } from './appmenu/appmenu.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { CaruselComponent } from './carusel/carusel.component';
import { FeatureComponent } from './feature/feature.component';
import { LessonComponent } from './lesson/lesson.component';



@NgModule({
  declarations: [
    AppComponent,
    AppmenuComponent,
    HomeComponent,
    BannerComponent,
    CaruselComponent,
    FeatureComponent,
    LessonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
