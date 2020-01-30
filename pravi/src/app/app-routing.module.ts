import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { ReachusComponent } from './reachus/reachus.component';
import { ChartComponent } from './home/charts/chart/chart.component';


const routes: Routes = [
  { path : '' , component : HomeComponent },
  { path : 'client' , component : ClientComponent},
  { path : 'reachUs' , component : ReachusComponent},
  { path : 'chart' , component : ChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
