import { Component } from '@angular/core';
import {MealPreferenceService} from "../meal-preference.service";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  constructor(private mealPreferenceService: MealPreferenceService) {
  }

}
