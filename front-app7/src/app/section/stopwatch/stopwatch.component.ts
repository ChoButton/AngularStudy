import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {

  present = 'welcome';

  routingCount: number;
  commandText: string;

  constructor(
    private router: Router,
    private pageToggleService: PageToggleService
  ) {

  }

  goClock(){
    this.pageToggleService.goPage('/clock')
  }

  ngOnInit() {
  }

}
