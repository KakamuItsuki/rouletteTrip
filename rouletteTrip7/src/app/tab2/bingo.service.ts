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
  allMissions = [
    'スクワット１０回する','論破する','自語りする','猫の写真を撮る','犬の写真を撮る','自販機でコーラを買う','ブランコに乗る','何か宣言する','坂道ダッシュする','他の人のミッションを見破る','大声で叫ぶ','誰にも言ってない秘密を打ち明ける',
    'ゴミを拾う','人参を食べる','すべらない話をする','装備品を褒められる','横断歩道でスキップする','雨に降られる','支払いを立て替える','何フェチか発表する','自慢話をする','思い出話をする','一発ギャグをする','216kcalの物を食べるor飲む',
    '173kcalの物を食べるor飲む','知らない人に声をかける','知らない人から声をかけられる','どこがやねんって突っ込まれる','懸垂を3回する','手を繋いで歩く','お湯を沸かす','ポイントをつけてもらう','映えスポットでピン写','失敗談を話す','好きな異性の仕草を発表する',
    'モノボケをする','旅行の一番の思い出を発表する','自分の誕生日のナンバープレートを探す','店員さんと世間話をする','練り物を食べる','ノリツッコミする','腕立て伏せ10回する','鳩を追い払う','飛行機の写真を撮る','肩を組む','みんなのお冷を注ぐ',
    '訪れたお店のSNSをフォローする','映えスイーツを食べる','じゃんけんで勝つ','モノマネをする','四葉のクローバーを見つける','1日で2万歩歩く','観光客と話す','外国人と話す','苺を食べる','飛び出し注意の標識を見つける','面白いって言ってもらう',
    '惚気る','撮り鉄する','握手する','みんなにお菓子を配る','現金でピッタリ払う','映えの飲み物を買う','趣味の話をする','自分の苗字を見つける','1日で15階分登る','ちびっこと遊ぶ','たい焼きを食べる','使用禁止を見つける','センスいいって言ってもらう',
    '逆立ちを10秒間する','ブランコに乗る','ハグをする','キャッシュレス決済する','キャリアプランを話す','例えツッコミをする','年確をされる','着ぐるみと写真を撮る','募金する','プリンを食べる','落書きを見つける','優しいねって言ってもらう',
    '自販機のアイスを買う','ハイタッチする','志望理由を話す','初恋の話をする','キッチンカーで買う','顔はめパネルで写真を撮る','ボタン式信号を押す','呼び出しベルを鳴らす','髪型を褒めてもらう','自販機でコーヒー牛乳を買う','ガチャガチャをする',
    'ストーリーをあげる','スタンプラリーのハンコを押す','３連続あいこ','集合写真で１人だけ変顔','値切る','フォークを使う','カップ麺を食べる','かわいいって言ってもらう','芝生でダッシュ','ベンチに座る','カカシを見つける','ビンタされる','レンチンする',
    'ポイントカードを作る','シーグラスを見つける','専門店に行く'
  ];
  misisonsWithCar = ['ありがとうハザードをもらう','ドライバーに差し入れ','車内ゲームで勝つ',];
  missionsWithHouse = ['野菜を切る','朝シャンする','買い出しに行く','']
  missions: string[] = [];
  missionsWithMember = ['とツーショットを撮る','をいつもと違う呼び方で３回以上呼ぶ','にジュースを奢ってあげる','のいいところを発表する','の第一印象を話す','に感謝を伝える','の偏見を言う']

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
    for (let i = this.allMissions.length - 1; i > 0; i--) {
      const r = Math.floor(Math.random() * (i + 1));
      const tmp = this.allMissions[i];
      this.allMissions[i] = this.allMissions[r];
      this.allMissions[r] = tmp;
    }
    this.missions = this.cut25Missions(this.allMissions);
    this.noticeChangeCard.next();
    
  }

  private cut25Missions(allMissions: string[]){
    let missions = [];
    for(let i=0; i<24; i++){
      missions[i] = allMissions[i];
    }
    return missions;
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
