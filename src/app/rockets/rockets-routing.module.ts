import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RocketComponent } from './pages/rocket/rocket.component';
import { RocketsComponent } from './pages/rockets/rockets.component';

const routes: Routes = [
  { path: '', component: RocketsComponent },
  { path: ':id', component: RocketComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
})
export class RocketsRoutingModule {}
