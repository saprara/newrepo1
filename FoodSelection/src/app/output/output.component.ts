import { Component } from '@angular/core';
import {MealPreferenceService} from "../meal-preference.service";

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {
constructor(private mealPreferenceService: MealPreferenceService) {
}
}
