import { Component, OnInit } from '@angular/core';
import { BingoService } from '../bingo.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {
  missions: string[] = [];
  result = '';
  isShow: boolean[] = []; 
  test = 0; 
  subscription = new Subscription();
  constructor(
    private bingoService: BingoService,
    public matDialog: MatDialog,
  ) { }

  ngOnInit(){
    this.missions = this.bingoService.getMissions();
    this.isShow = this.bingoService.getIsShow();
    this.subscription.add(
      this.bingoService.senseChangeCard().subscribe(()=>{
        this.missions = this.bingoService.getMissions();
        this.isShow = this.bingoService.getIsShow();
      })
    );
    
  }

  onclick(num: number){
    let input = num-1;
    this.result=this.missions[input];
    
    //this.result=num.toString();
  }

  ondblclick(num: number){
    
    let input = num-1;
    let temp = false;
    if(this.isShow[input]===false){
      temp = true;
    }
    this.isShow[input] = temp;
  }
  onclickNewCard(){

    const dialogRef = this.matDialog.open(ModalComponent, );

    dialogRef.afterClosed().subscribe((response)=>{
      if(response){
        this.selectOK();
      }
    });
  }

  selectOK(){
    this.bingoService.executeNewCard();
  }
  

  
  

}
