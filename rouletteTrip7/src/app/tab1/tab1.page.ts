import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';




@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  animations: [
    trigger('changeColor', [
    state(
      'blue',
      style({
      background: 'blue',
      top: '-144px',
      //position: 'fixed',
      position: 'absolute',
      })
    ),
    state(
      'red',
      style({
      background: 'red',
      top: '0px',
      //position: 'fixed',
      position: 'absolute',
      })
    ),
    transition('blue => red', [animate('0.5s')]),
    transition('red => blue', [animate('3s')]),
    ]),
  ]
})

export class Tab1Page {
  slotState = 'stop';
 
  constructor() {}
  isBlue = true;

  changeColor() {
    this.isBlue = !this.isBlue;
  }

  onClickStart(){
    this.slotState = 'start';
  }
  onClickStop(){
    this.slotState = 'stop';
  }
  onClickDefolte(){
    this.slotState = 'defolte'
  }
}
