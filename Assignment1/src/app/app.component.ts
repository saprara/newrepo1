import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  stackItems: string[]=["item-1","item-2","item-3"];
  //stackItems: string[]=[];

inputBoxContent: string | undefined ="";
onPop(){
  let t=this.stackItems.pop();
  this.inputBoxContent=t;
}

  onPush(value: string){
  if(value!=null) {
    this.stackItems.push(value);
  }
  else{}
  }


}
