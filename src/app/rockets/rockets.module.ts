import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RocketsRoutingModule } from './rockets-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RocketComponent } from './pages/rocket/rocket.component';
import { RocketBoxComponent } from './components/rocket-box/rocket-box.component';
import { MatButtonModule } from '@angular/material/button';
import { RocketsComponent } from './pages/rockets/rockets.component';
import { RocketInfoComponent } from './components/rocket-info/rocket-info.component';
import { RocketImageComponent } from './components/rocket-image/rocket-image.component';
import { MatIconModule } from '@angular/material/icon';
import { RocketsService } from './services/rockets.http.service';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [
    RocketsComponent,
    RocketComponent,
    RocketBoxComponent,
    RocketInfoComponent,
    RocketImageComponent,
  ],
  imports: [
    CommonModule,
    RocketsRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    SharedModule,
  ],
  providers: [RocketsService],
})
export class RocketsModule {}
