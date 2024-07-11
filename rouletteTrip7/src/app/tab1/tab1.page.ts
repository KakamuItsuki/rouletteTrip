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
      transition('genre0 => genre1', [animate('0.1s')]),
      transition('genre1 => genre2', [animate('0.1s')]),
      transition('genre2 => genre3', [animate('0.1s')]),
      transition('genre3 => genre4', [animate('0.1s')]),
      transition('genre4 => genre5', [animate('0.1s')]),
      transition('genre5 => genre6', [animate('0.1s')]),
      transition('genre6 => genre0', [animate('0s')]),
      transition('start => defolte', [animate('0s')]),
    ]),
    trigger('rolateRoulette', [
      state(
        'pie0',
        style({
        transform: 'rotate(10deg)',
        })
      ),
      state(
        'pie1',
        style({
          transform: 'rotate(45deg)',
        })
      ),
      state(
        'pie2',
        style({
          transform: 'rotate(80deg)',
        })
      ),
      state(
        'pie3',
        style({
          transform: 'rotate(100deg)',
        })
      ),
      state(
        'pie4',
        style({
          transform: 'rotate(135deg)',
        })
      ),
      state(
        'pie5',
        style({
          transform: 'rotate(170deg)',
        })
      ),
      state(
        'pie6',
        style({
          transform: 'rotate(190deg)',
        })
      ),
      state(
        'pie7',
        style({
          transform: 'rotate(225deg)',
        })
      ),
      state(
        'pie8',
        style({
          transform: 'rotate(260deg)',
        })
      ),
      state(
        'pie9',
        style({
          transform: 'rotate(280deg)',
        })
      ),
      state(
        'pie10',
        style({
          transform: 'rotate(315deg)',
        })
      ),
      state(
        'pie11',
        style({
          transform: 'rotate(350deg)',
        })
      ),
      transition('pie0 => pie1', [animate('0.1s')]),
      transition('pie1 => pie2', [animate('0.1s')]),
      transition('pie2 => pie3', [animate('0.1s')]),
      transition('pie3 => pie4', [animate('0.1s')]),
      transition('pie4 => pie5', [animate('0.1s')]),
      transition('pie5 => pie6', [animate('0.1s')]),
      transition('pie6 => pie7', [animate('0.1s')]),
      transition('pie7 => pie8', [animate('0.1s')]),
      transition('pie8 => pie9', [animate('0.1s')]),
      transition('pie9 => pie10', [animate('0.1s')]),
      transition('pie10 => pie11', [animate('0.1s')]),
      transition('pie11 => pie0', [animate('0.1s')]),
    ]),
    
  ]
})

export class Tab1Page {
  subscription = new Subscription();
  genre = ['genre0', 'genre1', 'genre2', 'genre3', 'genre4', 'genre5', 'genre6'];
  slotIndex = 0;
  slotState = this.genre[0];
  pie = ['pie0', 'pie1','pie2', 'pie3','pie4', 'pie5','pie6', 'pie7','pie8', 'pie9','pie10', 'pie11'];
  rouletteState = this.pie[0];
  rouletteIndex = 0;
  private noticeStop = new Subject<void>();
  private noticeRouletteStop = new Subject<void>();
 
  constructor() {}
  isBlue = true;

  changeColor() {
    this.isBlue = !this.isBlue;
  }

  onClickStart(){
    const intervalId = setInterval(()=>{
      this.slotIndex++;
      
      if(this.slotIndex === 7){
        this.slotIndex = 0;
        this.slotState = this.genre[this.slotIndex];
        // 10ms待たないとslotStateの切り替わりを検知してくれない？
        setTimeout(()=>{this.slotIndex = 1;
          this.slotState = this.genre[this.slotIndex];},10);
      }else{
        this.slotState = this.genre[this.slotIndex];
      }
    
    }, 100);
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

  onClickRouletteStart(){
    //this.rouletteState = this.pie[1];
    const intervalId = setInterval(()=>{
      this.rouletteIndex++;
      this.rouletteState = this.pie[this.rouletteIndex];
      if(this.rouletteIndex === 11){
        this.rouletteIndex = -1;
        //this.rouletteState = this.genre[this.rouletteIndex];
        // 10ms待たないとslotStateの切り替わりを検知してくれない？
        //setTimeout(()=>{this.slotIndex = 1;
        //  this.rouletteState = this.genre[this.rouletteIndex];},10);
      }//else{
      //   this.rouletteState = this.genre[this.rouletteIndex];
      // }
    
    }, 100);
    this.subscription.add(
      this.senseRouletteStop().subscribe(()=>{
        
        clearInterval(intervalId);
      })
    );
  }
  senseRouletteStop(): Observable<void>{
    return this.noticeRouletteStop.asObservable();
  }

  onClickRouletteStop(){
    this.noticeRouletteStop.next();
  }
}
