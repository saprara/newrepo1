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




  NumberOfCupcakes(value: number) {
    this.cupCakes.NumberOfCupCakes = value;
    this.router.navigate(['input2'], { state: { cupCakes: this.cupCakes } });
  }

}
