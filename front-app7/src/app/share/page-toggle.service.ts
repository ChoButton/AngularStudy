import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable(
  // {
  // providedIn: StopwatchComponent'
  // }
)
export class PageToggleService {

  public routingCount: number = 0;

  constructor(private router: Router) { }

  goPage(target: string){
    this.routingCount++;
    this.router.navigateByUrl(target)
  }
}
