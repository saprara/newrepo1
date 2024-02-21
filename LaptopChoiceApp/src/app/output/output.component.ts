import { Component } from '@angular/core';
import {ProcessorInfo} from "../ProcessorInfo";
import {ProcessorService} from "../ProcessorService";

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {
  processorInfo: ProcessorInfo;
  constructor(service: ProcessorService) {
    this.processorInfo = service.processorInfo;
  }
}
