import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { DialogData } from './modal/modal.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  dialogData: DialogData = {
    name: '',
    animal: ''
  };
  result='default';
  isShow=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
  missions = [
    'スクワット１０回する','論破する','自語りする','猫の写真を撮る','犬の写真を撮る','自販機でコーラを買う','ブランコに乗る','何か宣言する','坂道ダッシュする','他の人のミッションを見破る','mission12','mission13','mission14','mission15','mission16','mission17','mission18','mission19','mission20','mission21','mission22','mission23','mission24','mission25','mission26','mission27','mission28','mission29','mission30','mission31'
  ];
  missionsWithMember = ['とツーショットを撮る','をいつもと違う呼び方で３回以上呼ぶ','にジュースを奢ってあげる']
  constructor(public matDialog: MatDialog) {}

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
      console.log('close');
      if(response){
        console.log('OKボタン');
        this.executeNewCard();
      }else{
        console.log('キャンセル');
      }
    });
    
  }
  executeNewCard(){
    this.isShow=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
    for (let i = this.missions.length - 1; i > 0; i--) {
      const r = Math.floor(Math.random() * (i + 1));
      const tmp = this.missions[i];
      this.missions[i] = this.missions[r];
      this.missions[r] = tmp;
    }
  }

}
