import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CowComponent } from './cow/cow.component';
import { FormularioCowComponent } from './formulario-cow/formulario-cow.component';
import { HttpClientModule } from '@angular/common/http';
import { PiedraPapelComponent } from './piedra-papel/piedra-papel.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { BatallaNavalComponent } from './batalla-naval/batalla-naval.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {  MatDialogModule } from '@angular/material/dialog';
import { DialogPlayerAmeComponent } from './dialog-player-ame/dialog-player-ame.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CowComponent,
    FormularioCowComponent,
    PiedraPapelComponent,
    AhorcadoComponent,
    BatallaNavalComponent,
    DialogPlayerAmeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatGridListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
