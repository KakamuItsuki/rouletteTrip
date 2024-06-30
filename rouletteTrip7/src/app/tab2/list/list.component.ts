import { Component, OnInit } from '@angular/core';
import { BingoService } from '../bingo.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent  implements OnInit {

  constructor(
    private bingoService: BingoService,
  ) { }

  ngOnInit() {}
  
  onClickCard(){
    this.bingoService.changeToCard();
  }
}
