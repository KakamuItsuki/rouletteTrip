import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { Router } from '@angular/router';
import { BingoService } from './bingo.service';
import { CardComponent } from './card/card.component';
import { ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  test = 0;
  result='default';
  @ViewChildren(CardComponent) viewChildren!: QueryList<CardComponent>;

  constructor(
    public matDialog: MatDialog,
    private router: Router,
    private bingoService: BingoService,
  ) {}

  ngOnInit(): void {
    
  }

  onclickNewCard(){

    const dialogRef = this.matDialog.open(ModalComponent, );

    dialogRef.afterClosed().subscribe((response)=>{
      console.log('close');
      if(response){
        console.log('OKボタン');
        this.selectOK();
      }else{
        console.log('キャンセル');
      }
    });
  }

  selectOK(){
    this.bingoService.executeNewCard();
  }
  



}
