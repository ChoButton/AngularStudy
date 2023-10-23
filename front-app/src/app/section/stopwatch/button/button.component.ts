import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit{
  
  @Output() clickEvent = new EventEmitter();


  constructor(){

  }

  executeButton(command: string){
    this.clickEvent.emit(command);
  }

  ngOnInit(): void {
    
  }
}