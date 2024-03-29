import {Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  today: Date

   name: string = "Rakshit Sapra"

  constructor() {
    this.today = new Date()
  }
}
