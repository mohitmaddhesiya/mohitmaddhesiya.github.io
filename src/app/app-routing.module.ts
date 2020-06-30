import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { MainComponent } from './component/main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnalyticsComponent } from './dashboard/analytics/analytics.component';
import { LineChartComponent } from './dashboard/analytics/line-chart/line-chart.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'admin', component: DashboardComponent,
  children: [{
    path: 'anlytics', component: AnalyticsComponent, data: {
      breadcrumb: 'Anlytics'
   }
  },
  {
    path: 'line-chart', component: LineChartComponent, data: {
      breadcrumb: 'Line'
   }
  }
]
  },
  { path: 'dashboard', component: MainComponent,
   children: [{
    path: 'home', component: HomeComponent, data: {
      breadcrumb: 'Home'
    }
  },
  {
    path: 'registration', component: RegistrationComponent, data: {
      breadcrumb: 'registration'
    }
  }]},
  { path: '**', redirectTo: 'dashboard/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
