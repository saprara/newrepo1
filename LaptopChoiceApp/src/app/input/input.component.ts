import {Component} from '@angular/core';
import {ProcessorInfo} from "../ProcessorInfo";
import {ProcessorManufacturer} from "../ProcessorManufacturer";
import {ProcessorService} from "../ProcessorService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  processorInfo :ProcessorInfo= new ProcessorInfo();


  constructor(private service: ProcessorService, private router: Router) {
  }
  onSubmit(): void {
    this.processorInfo.ProcessorModelName= this.processorInfo.ProcessorModelName.trim();
    this.service.submitProcessorInfo(this.processorInfo);
    this.router.navigate(["output"]);
  }


  protected readonly ProcessorManufacturer = ProcessorManufacturer;
}
