import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import {HomeComponent} from './home/home.component';
import {FootballComponent} from './football/football.component';
import {CricketComponent} from './cricket/cricket.component';
import { from } from 'rxjs';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'football',component:FootballComponent},
  {path:'cricket',component:CricketComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
