import { Component, OnInit } from '@angular/core';
import { BingoService } from '../bingo.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent  implements OnInit {
  missions: string[] = [];
  isShow: boolean[] = [];
  constructor(
    private bingoService: BingoService,
  ) { }

  ngOnInit() {
    this.missions = this.bingoService.getMissions();
    this.isShow = this.bingoService.getIsShow();
  }
  
  onClickCard(){
    this.bingoService.changeToCard();
  }

  
}
