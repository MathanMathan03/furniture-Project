import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlignmentComponent } from './alignment/alignment.component';
import { HeaderComponent } from './alignment/header/header.component';
import { BodyComponent } from './alignment/body/body.component';
import { FooterComponent } from './alignment/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './Authentication/login/login.component';
import { RegistrationComponent } from './Authentication/registration/registration.component';
import { ProfileComponent } from './Authentication/profile/profile.component';
import { CarouselComponent } from './alignment/carousel/carousel.component';
import { SliderComponent } from './alignment/slider/slider.component';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from './alignment/category/category.component';
import {HttpClientModule}  from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,
    AlignmentComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    CarouselComponent,
    SliderComponent,
    CategoryComponent,
    
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
