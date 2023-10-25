import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PageToggleService } from 'src/app/share/page-toggle.service';

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

  constructor(
    // private pageToggleService : PageToggleService
  ) {
    this.min = 0;
    this.sec = 0;
    this.ms = 0;
  }

  timeStart(){
    // timeStart가 호출될 경우 setInterval 객체가 지속적으로 쌓여 멈춤이 되지 않는 현상 발생
    // 시작을 2번 누를 경우 기존의 setInterval을 지우고 새로 생성하는 방식을 구현 하기 위해
    // this.timeStop(); 추가
    this.timeStop();
    this.timeInterval = setInterval(() => {

      if(this.ms >= 100) {
        this.ms = 0;
        this.sec++;
      }
      if(this.sec >= 60) {
        this.sec = 0;
        this.min++;
      }
      this.ms++;
    }, 10)
  }

  timeStop(){
    clearInterval(this.timeInterval)
  }

  timeReset(){
    this.timeStop()
    this.min = 0;
    this.sec = 0;
    this.ms = 0;
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('ng on changes')
    for(let propName in changes) {

    }
  }
}
