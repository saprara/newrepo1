import {ProcessorInfo} from "./ProcessorInfo";

export class ProcessorService {

  processorInfo: ProcessorInfo = new ProcessorInfo();

  submitProcessorInfo(processorInfo: ProcessorInfo): void {
    this.processorInfo = processorInfo;

  }
}
