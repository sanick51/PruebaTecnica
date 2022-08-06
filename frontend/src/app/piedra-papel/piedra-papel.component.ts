import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from 'src/environments/global-constants';
import { MatDialog } from '@angular/material/dialog';
import { DialogPlayerAmeComponent } from '../dialog-player-ame/dialog-player-ame.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-piedra-papel',
  templateUrl: './piedra-papel.component.html',
  styleUrls: ['./piedra-papel.component.css']
})
export class PiedraPapelComponent implements OnInit {
  resultGame!: game ;
  selection = "";
  player = localStorage.getItem("Player");
  vidas = Number(localStorage.getItem('Vidas'));
  puntuacion = Number(localStorage.getItem('Puntuacion'));

  constructor(public http: HttpClient, public dialogEdit:MatDialog , private router: Router  ) { }

  ngOnInit(): void {
    if(localStorage.getItem("Player") == null){
      this.openDialog();
    }
  }

  Papel(){
    this.requestResults("papel");
  }
  Tijera(){
   this.requestResults("tijera");
  }
  Piedra(){
    this.requestResults("piedra");
  }

  requestResults(result: string){
    this.http.post<game>(GlobalConstants.API+"/piedra-papel", {value: result}).subscribe(
      (data:game) => {
        console.log(data);
        this.resultGame = data;
        if(this.resultGame.result == "Ganaste"){
          this.addPuntuacion();
        }else if(this.resultGame.result == "Perdiste"){
          this.restPuntuacion();
        }
      }
    );
  }

  addPuntuacion(){
    this.puntuacion += 100;
    let myNumber = Number(localStorage.getItem('Puntuacion'));
    myNumber = myNumber + 1000;
    localStorage.setItem('Puntuacion', myNumber.toString());
  }

  restPuntuacion(){
    this.vidas--;
    let myNumber = Number(localStorage.getItem('Vidas'));
    myNumber--;
    if(myNumber == 0){
      alert("Perdiste gracias por jugar obtuviste " + this.puntuacion + " puntos");
      this.router.navigate(['/Home']);
      localStorage.clear();
      this.http.post(GlobalConstants.API+"/player",{name: this.player , score: this.puntuacion}).subscribe(
        (data:any) => {
          
        }
      );
    }
    localStorage.setItem('Vidas', myNumber.toString());
    
  }

  openDialog(): void {
    const dialogEdit = this.dialogEdit.open(DialogPlayerAmeComponent, {
      panelClass: 'my-dialog',
     data : '',
     height: '30%',
     width: '300px',
  });
  dialogEdit.afterClosed().subscribe((art) => {
    if (art != undefined){
      localStorage.setItem("Player", art);
      this.http.post(GlobalConstants.API+"/player/add",{name: art}).subscribe(
        (data) => {
          return console.log(data);
        }
      );
    }
  });
}
}
export class game{
  constructor(
    public hand : string,
    public machineHand: string,
    public result: string
  ){}
}