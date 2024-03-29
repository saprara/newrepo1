import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

import {HttpClientModule} from "@angular/common/http";
import {PetDetailsComponent} from "./pet-details/pet-details.component";
import {PetListComponent} from "./pet-list/pet-list.component";
import {RouterModule, RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PetDetailsComponent,
    PetListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
RouterOutlet,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
