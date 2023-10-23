import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss'],
})
export class TimeDisplayComponent{
  @Input() inputData!: string;

  min: number
  sec: number
  ms: number

  timeInterval: any;

  constructor() {
    this.min = 0;
    this.sec = 0;
    this.ms = 0;
  }

  timeStart(){
    this.timeInterval = setInterval(() => {
      this.ms++;
    }, 10)
  }

  timeStop(){
    clearInterval(this.timeInterval)
  }

  timeReset(){
    this.timeStop()
    this.ms = 0;
  }


  // ngOnChanges(changes: SimpleChanges): void {
  //   for(let propName in changes){
  //     if(propName == 'inputData'){

  //       switch(changes[propName].currentValue){
  //         case 'start' : 
  //           this.timeStart();
  //           break;
  //         case 'stop' : 
  //           this.timeStop();
  //           break;
  //         case 'reset' : 
  //           this.timeReset();
  //           break;  
  //       }
  //     }
  //   }
  // }
}
