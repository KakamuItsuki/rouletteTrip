import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
import { Subscription } from 'rxjs';
import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  animations: [
    trigger('changeColor', [
    state(
      'genre0',
      style({
      top: '-144px',
      })
    ),
    state(
      'genre1',
      style({
      top: '-120px',
      })
    ),
    state(
      'genre2',
      style({
      top: '-96px',
      })
    ),
    state(
      'genre3',
      style({
      top: '-72px',
      })
    ),
    state(
      'genre4',
      style({
      top: '-48px',
      })
    ),
    state(
      'genre5',
      style({
      top: '-24px',
      })
    ),
    state(
      'genre6',
      style({
      top: '0px',
      })
    ),
    transition('genre0 => genre1', [animate('1s')]),
    transition('genre1 => genre2', [animate('1s')]),
    transition('genre2 => genre3', [animate('1s')]),
    transition('genre3 => genre4', [animate('1s')]),
    transition('genre4 => genre5', [animate('1s')]),
    transition('genre5 => genre6', [animate('1s')]),
    transition('genre6 => genre0', [animate('0s')]),
    transition('start => defolte', [animate('0s')]),
    ]),
  ]
})

export class Tab1Page {
  subscription = new Subscription();
  genre = ['genre0', 'genre1', 'genre2', 'genre3', 'genre4', 'genre5', 'genre6'];
  slotIndex = 0;
  slotState = this.genre[0];
  
  private noticeStop = new Subject<void>();
 
  constructor() {}
  isBlue = true;

  changeColor() {
    this.isBlue = !this.isBlue;
  }

  onClickStart(){
    //this.slotIndex++;
    //this.slotState = this.genre[this.slotIndex];
    //console.log(this.slotState);
    const intervalId = setInterval(()=>{
      //console.log(this.slotState);
      this.slotIndex++;
      
      if(this.slotIndex === 7){
        //this.slotState = this.genre[this.slotIndex];
        this.slotIndex = 0;
        this.slotState = this.genre[this.slotIndex];
        setTimeout(()=>{this.slotIndex = 1;
          this.slotState = this.genre[this.slotIndex];},10);
        
      }else{
        //console.log(this.slotIndex);
        this.slotState = this.genre[this.slotIndex];
      }
    
    }, 1000);
    this.subscription.add(
      this.senseStop().subscribe(()=>{
        clearInterval(intervalId);
      })
    );


  }
  senseStop(): Observable<void>{
    return this.noticeStop.asObservable();
  }
  onClickStop(){
    this.noticeStop.next();
    //this.slotState = 'stop';
  }
  onClickDefolte(){
    this.slotState = 'defolte';
  }
  onClickStart2(){
    this.slotState = 'stop';
    //this.onClickDefolte();
  }

}
