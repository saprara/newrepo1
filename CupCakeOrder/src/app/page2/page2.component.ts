import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {CupCakeTypes} from "../CupCakeTypes";
import{Page1Component}from "../page1/page1.component";



@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {

  cupCakes: any; // Define the cupCakes object

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state) {
      this.cupCakes = navigation.extras.state['cupCakes']; // Retrieve the cupCakes object
    }


  }
  cancel() {
    this.router.navigate(['/input']);
  }

  goBack() {
    window.history.back();
  }

  goToNext() {
    this.router.navigate(['/output'], { state: { cupCakes: this.cupCakes } });
  }
  protected readonly CupCakeTypes = CupCakeTypes;
}
