import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { MaterialModule } from './modules/material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './core/navbar/navbar.component';
import { UpcomingEventComponent } from './component/home/upcoming-event/upcoming-event.component';
import { ImageSliderComponent } from './component/home/image-slider/image-slider.component';
import { UpcomingMatchComponent } from './component/home/upcoming-match/upcoming-match.component';
import { TeamRankingComponent } from './component/home/team-ranking/team-ranking.component';
import { TopPlayerComponent } from './component/home/top-player/top-player.component';
import { MainComponent } from './component/main/main.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { FooterComponent } from './core/footer/footer.component';
import { LoginComponent } from './core/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnalyticsComponent } from './dashboard/analytics/analytics.component';
import { NgChartjsModule } from 'ng-chartjs';
import { LineChartComponent } from './dashboard/analytics/line-chart/line-chart.component';
import { RadarComponent } from './dashboard/analytics/radar/radar.component';
import { PieComponent } from './dashboard/analytics/pie/pie.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UpcomingEventComponent,
    ImageSliderComponent,
    UpcomingMatchComponent,
    TeamRankingComponent,
    TopPlayerComponent,
    MainComponent,
    RegistrationComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    AnalyticsComponent,
    LineChartComponent,
    RadarComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgChartjsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
