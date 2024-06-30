import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BingoService {

  private noticeChangeCard = new Subject<void>();
  private noticeSelectList = new Subject<void>();
  private noticeSelectCard = new Subject<void>();

  isShow=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
  missions = [
    'スクワット１０回する','論破する','自語りする','猫の写真を撮る','犬の写真を撮る','自販機でコーラを買う','ブランコに乗る','何か宣言する','坂道ダッシュする','他の人のミッションを見破る','mission12','mission13','mission14','mission15','mission16','mission17','mission18','mission19','mission20','mission21','mission22','mission23','mission24','mission25','mission26','mission27','mission28','mission29','mission30','mission31'
  ];
  missionsWithMember = ['とツーショットを撮る','をいつもと違う呼び方で３回以上呼ぶ','にジュースを奢ってあげる']

  constructor() { 
    this.executeNewCard();
  }

  public getIsShow(){
    return this.isShow;
  }

  public getMissions(){
    return this.missions;
  }

  public setIsShow(isShow: boolean[]){
    this.isShow = isShow;
  }

  public executeNewCard(){
    this.isShow=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
    for (let i = this.missions.length - 1; i > 0; i--) {
      const r = Math.floor(Math.random() * (i + 1));
      const tmp = this.missions[i];
      this.missions[i] = this.missions[r];
      this.missions[r] = tmp;
    }
    this.noticeChangeCard.next();
    
  }

  public senseChangeCard(): Observable<void>{
    return this.noticeChangeCard.asObservable();
  }

  public senseSelectList(): Observable<void>{
    return this.noticeSelectList.asObservable();
  }
  
  public senseSelectCard(): Observable<void>{
    return this.noticeSelectCard.asObservable();
  }
  public changeToList(){
    this.noticeSelectList.next(); 
  }
  public changeToCard(){
    this.noticeSelectCard.next();
  }
}
