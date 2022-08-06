import { Component, OnInit } from '@angular/core';
import { BatallaNavalComponent } from '../batalla-naval/batalla-naval.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialogEdit:MatDialog) { }

  ngOnInit(): void {
    if(localStorage.getItem("Player") == null){
      localStorage.setItem("Puntuacion", "0");
      localStorage.setItem("Vidas", "10");
    }
  }

  openDialog(): void {
    const dialogEdit = this.dialogEdit.open(BatallaNavalComponent, {
      panelClass: 'my-dialog',
     data : '',
     height: '30%',
     width: '300px',
  });
}


}
