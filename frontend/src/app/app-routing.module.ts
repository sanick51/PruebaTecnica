import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CowComponent } from './cow/cow.component';
import { PiedraPapelComponent } from './piedra-papel/piedra-papel.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { BatallaNavalComponent } from './batalla-naval/batalla-naval.component';
const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Cow', component: CowComponent },
  { path: 'Piedra', component: PiedraPapelComponent },
  { path: 'Ahorcado', component:  AhorcadoComponent },
  { path: 'Batalla', component:  BatallaNavalComponent },
  {path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
