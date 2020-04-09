import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { SportsComponent } from './sports/sports.component';
import { SportsDetailsComponent } from './sports-details/sports-details.component';
import { LogoutComponent } from './logout/logout.component';
import { LiveComponent } from './live/live.component';
import { from } from 'rxjs';
import { RouteService } from './core/service/route.service';

const authenticatedRoutes =   RouteService.withShell([
  { path: '', component: HomeComponent },
  { path: 'sports/:url', component: SportsComponent },
  { path: 'sports/:url/:country', component: SportsDetailsComponent },
  { path: 'highlights', component: HighlightsComponent },
  { path: 'live', component: LiveComponent },
]);

const routes: Routes = [
  authenticatedRoutes,
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
