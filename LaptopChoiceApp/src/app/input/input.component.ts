import { Component } from '@angular/core';
import {ProcessorInfo} from "../ProcessorInfo";
import {ProcessorManufacturer} from "../ProcessorManufacturer";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  protected readonly ProcessorInfo = ProcessorInfo;
  protected readonly ProcessorManufacturer = ProcessorManufacturer;
}
