import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SportsComponent } from './sports/sports.component';
import { SportsDetailsComponent } from './sports-details/sports-details.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { SafePipe } from './service/pipe/safe.pipe';
import { LogoutComponent } from './logout/logout.component';
import { LiveComponent } from './live/live.component';
import { AgmCoreModule } from '@agm/core';
import { ShellComponent } from './core/shell/shell.component';
import { HeaderComponent } from './core/shell/header/header.component';
import { FooterComponent } from './core/shell/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardCarouselComponent } from './home/dashboard-carousel/dashboard-carousel.component';
import { FamousPersonalitiesComponent } from './home/famous-personalities/famous-personalities.component';
import { DashboardJumbotronComponent } from './home/dashboard-jumbotron/dashboard-jumbotron.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    SportsComponent,
    SportsDetailsComponent,
    HighlightsComponent,
    SafePipe,
    LogoutComponent,
    LiveComponent,
    ShellComponent,
    HeaderComponent,
    FooterComponent,
    DashboardCarouselComponent,
    FamousPersonalitiesComponent,
    DashboardJumbotronComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD-dIA5uX4cj12aUCEb8GlToD-jYvil42s'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
