import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipsRoutingModule } from './ships-routing.module';
import { ShipsComponent } from './pages/ships/ships.component';
import { ShipsService } from './services/ships.http.service';
import { ShipBoxComponent } from './components/ship-box/ship-box.component';
import { SharedModule } from 'src/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ShipsComponent, ShipBoxComponent],
  imports: [CommonModule, ShipsRoutingModule, SharedModule, MatButtonModule],
  providers: [ShipsService],
})
export class ShipsModule {}
