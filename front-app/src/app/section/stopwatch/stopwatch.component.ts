import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent {
  present: string;

  commandText;

  constructor() {
    this.present = 'welcome';
    this.commandText = '';
  }

  timeControl($event: string){
    this.present = $event;
  }
}

