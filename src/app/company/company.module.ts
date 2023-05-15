import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './pages/company/company.component';
import { CompanyRoutingModule } from './company-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CompanyService } from './services/company.http.service';
import { CompanyInfoComponent } from './components/company-info/company-info.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CompanyComponent, CompanyInfoComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    HttpClientModule,
    MatIconModule,
  ],
  providers: [CompanyService],
})
export class CompanyModule {}
