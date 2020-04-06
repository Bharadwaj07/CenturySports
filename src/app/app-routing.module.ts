import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import {HomeComponent} from './home/home.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { SportsComponent } from './sports/sports.component';
import { SportsDetailsComponent } from './sports-details/sports-details.component';
import { LogoutComponent } from './logout/logout.component';

import { from } from 'rxjs';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'sports/:url',component:SportsComponent},
  {path:'sports/:url/:country',component:SportsDetailsComponent},
  {path:'highlights',component:HighlightsComponent},
  {path:'logout',component:LogoutComponent},
  

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
