import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  style = {'height': '400px', 'transition':'2.5s'}
  //wheel = document.querySelector(".js-slot_wheel_inner")
  wheel: HTMLElement | null = document.getElementById( 'js-slot_wheel_inner' );
  // wheel: HTMLCollectionOf<Element> = document.getElementsByClassName( 'js-slot_wheel_inner' );
  constructor() {}

  onClickStart(){
    console.log("ok1");
    this.style = {'height': '200px'}
    
    if(this.wheel !== null){
      console.log("ok2");
      this.wheel.style.transform = `translate3d(0px, 100px, 0px)`;
    }
    
  }
}
