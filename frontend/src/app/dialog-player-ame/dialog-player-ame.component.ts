import { Component, OnInit , Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-player-ame',
  templateUrl: './dialog-player-ame.component.html',
  styleUrls: ['./dialog-player-ame.component.css']
})
export class DialogPlayerAmeComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogPlayerAmeComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: string,
  ) { }

  dataIn = "";
  ngOnInit(): void {
  }

  cancelar() {
    this.dialogRef.close();
  }

  send(){
    this.dialogRef.close(this.data);
  }  

}
