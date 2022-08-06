import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from 'src/environments/global-constants';
import { MatDialog } from '@angular/material/dialog';
import { DialogPlayerAmeComponent } from '../dialog-player-ame/dialog-player-ame.component';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {
  public form!: FormGroup;
  word = "";
  intentos = 5;
  result : wordArray[] = [];
  constructor(private formBuilder: FormBuilder ,public http: HttpClient , public dialogEdit:MatDialog ) { }

  ngOnInit(): void {
    if(localStorage.getItem("Player") == null){
      this.openDialog();
    }
    this.requestWord();
    this.form = this.formBuilder.group({
      text: ['', [Validators.required, Validators.maxLength(1), Validators.maxLength(1)]],
    });

  }


  send(){
    for(let i = 0; i < this.result.length; i++){
      if(this.result[i].word.toLocaleLowerCase() == this.form.value.text.toLocaleLowerCase()){
        this.result[i].validation = true;
      }else{
        this.intentos--;
      }
    }
  }

  requestWord(){
    this.http.get<word>(GlobalConstants.API+"/ahorcado").subscribe(
      (data:word) => {
        console.log(data);
        this.word = data.WORD;
        console.log(this.word);
        let result = this.word.split("");
        for(let i = 0; i < result.length; i++){
          this.result[i] = new wordArray(result[i], false);
        }
      });
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
export class wordArray {
  constructor(public word: string ,
     public validation : boolean 
     ){
     }
     changeState(){
      this.validation = true;
     }     
}

export class word {
  constructor(public WORD: string){}
}


