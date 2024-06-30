import { Component, OnInit } from '@angular/core';
import { BingoService } from './bingo.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  test = 0;
  result='default';
  subscription = new Subscription();
  constructor(
    private bingoService: BingoService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    
    this.subscription.add(
      this.bingoService.senseSelectList().subscribe(()=>{
        this.router.navigateByUrl('tabs/tab2/list');
      })
    );
    this.subscription.add(
      this.bingoService.senseSelectCard().subscribe(()=>{
        this.router.navigateByUrl('tabs/tab2/card');
      })
    );
  }

  



}
