import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {CupCakes} from "../CupCakes";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {
cupCakes : CupCakes=new CupCakes();
  constructor(private router: Router) {
  }

  NumberCupcakes = 0;


  NumberOfCupcakes(value: number) {
    this.NumberCupcakes = value;
    this.router.navigate(['input2']);
  }

}
