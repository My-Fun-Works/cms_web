import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './view/layouts/footer/footer.component';
import { HomeComponent } from './view/components/home/home.component';
import { PreviewComponent } from './view/components/preview/preview.component';
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from "./view/layouts/header/header.component";
import {RouterModule, Routes} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

export const routs: Routes=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"preview",
    component:PreviewComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    PreviewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routs),
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
