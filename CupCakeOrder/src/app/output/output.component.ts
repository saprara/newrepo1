import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {
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
}
