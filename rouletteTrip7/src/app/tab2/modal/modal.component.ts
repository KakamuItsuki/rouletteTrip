import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'; 
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent  implements OnInit {
  OKOK = 'OKOK';

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  
  ngOnInit() {}

  // logoutボタンクリックイベントで呼び出される関数
  actionFunction() {
    alert("You have logged out.");
    this.closeModal();
  }

  // ダイアログを閉じる
  closeModal() {
    this.dialogRef.close();
  }

}
