import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Page2Component} from "./page2/page2.component";
import {Page1Component} from "./page1/page1.component";
import {OutputComponent} from "./output/output.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: 'input', component:Page1Component},
  {path: 'input2', component:Page2Component },
  {path: 'output', component: OutputComponent},
  {path: '', redirectTo: 'input', pathMatch: 'full'},
  {path: '**', redirectTo: 'input'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
