import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  result='default';
  missions = [
    'mission1','mission2','mission3','mission4','mission5','mission6','mission7','mission8','mission9','mission10','mission11','mission12','mission13','mission14','mission15','mission16','mission17','mission18','mission19','mission20','mission21','mission22','mission23','mission24','mission25','mission26','mission27','mission28','mission29','mission30','mission31'
  ]
  constructor() {}

  onclick(num: number){
    let input = num-1;
    this.result=this.missions[input];
    
    //this.result=num.toString();
  }

  ondblclick(num: number){
    let input = num-1;
    this.result='aaa';
  }

  onclickNewCard(){
    for (let i = this.missions.length - 1; i > 0; i--) {
      const r = Math.floor(Math.random() * (i + 1));
      const tmp = this.missions[i];
      this.missions[i] = this.missions[r];
      this.missions[r] = tmp;
    }
  }

}
