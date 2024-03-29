import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { OutputComponent } from './output/output.component';
import {FormsModule} from "@angular/forms";
import {ProcessorService} from "./ProcessorService";

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    FooterComponent,
    HeaderComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [ProcessorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

