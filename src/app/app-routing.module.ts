import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {HomeComponent} from './home/home.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { SportsComponent } from './sports/sports.component';
import { SportsDetailsComponent } from './sports-details/sports-details.component';
import { LogoutComponent } from './logout/logout.component';
import {UserSubscriptionComponent} from './user-subscription/user-subscription.component';
import { GalleryComponent } from './gallery/gallery/gallery.component';
import { GalleryListComponent } from './gallery/gallery-list/gallery-list.component';
// import { from } from 'rxjs';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'sports/:url',component:SportsComponent},
  {path:'sports/:url/:country',component:SportsDetailsComponent},
  {path:'highlights',component:HighlightsComponent},
  {path:'logout',component:LogoutComponent},
  { path: 'login', component: LoginComponent },
  {path:'userSubscriptions',component:UserSubscriptionComponent},
  {path:'images/uploads',component:GalleryComponent},
  {path:'images/list',component:GalleryListComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
