import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SectionModule } from '../section/section.module';

@Injectable(
  {
    // 앵귤러팀에서의 권장사항 서비스단에서 적용될 모듈을 기술함
  providedIn: SectionModule
  }
)
export class PageToggleService {

  public routingCount: number = 0;

  constructor(private router: Router) { }

  goPage(target: string){
    this.routingCount++;
    this.router.navigateByUrl(target)
  }
}
