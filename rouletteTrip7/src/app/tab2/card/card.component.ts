import { Component, OnInit } from '@angular/core';
import { BingoService } from '../bingo.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {
  missions: string[] = [];
  result = '';
  isShow: boolean[] = []; 
  constructor(private bingoService: BingoService) { }

  ngOnInit(){
    this.missions = this.bingoService.getMissions();
    this.isShow = this.bingoService.getIsShow();
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

  
  

}
