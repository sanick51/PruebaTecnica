import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from 'src/environments/global-constants';

@Component({
  selector: 'app-formulario-cow',
  templateUrl: './formulario-cow.component.html',
  styleUrls: ['./formulario-cow.component.css']
})

export class FormularioCowComponent implements OnInit {
  public form!: FormGroup;
  public formCantidad !: FormGroup;
  public vacasCantidad: boolean = false;
  public end: boolean = true;
  dia = 1 ;
  cantVaca = 1 ;
  result : Cow | undefined;

  constructor(private formBuilder: FormBuilder ,public http: HttpClient){

  }  

  ngOnInit(): void {
      this.form = this.formBuilder.group({
        Vacas: ['', [Validators.required, Validators.min(3), Validators.max(50)]],
      });
      this.formCantidad = this.formBuilder.group({
        Cantidad: ['', [Validators.required, Validators.min(0), Validators.max(11.9)]],
      });
  }
  send(){
    this.vacasCantidad = true;
  }

  sendMilk(){
    
    this.http.post(GlobalConstants.API+"/cow/add",{dia: this.dia, leche: this.formCantidad.value.Cantidad , vaca: this.cantVaca}).subscribe(
      (data) => {
        return console.log(data);
      });
      this.cantVaca++;
      
    if(this.cantVaca > this.form.value.Vacas){
      this.cantVaca = 1;
      this.dia++;
    }
    if(this.dia === 8 && this.cantVaca == 1){
      this.end = false;
      this.requestResults();
    }
  }
  
  requestResults(){
    this.http.get<Cow>(GlobalConstants.API+"/cow/results").subscribe(
      (data : Cow) => {
        this.result = data;
      }
    );
  }
}

export class Cow {
 constructor(
  public total: string[],
  public max: string[],
  public perDay: string[],
  ){}
}
