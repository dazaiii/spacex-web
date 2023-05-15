import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.http.service';
import { Observable, catchError, throwError } from 'rxjs';
import { Company } from '../../models/company.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  public company: Observable<Company>;
  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.getCompanyInfo();
  }

  private getCompanyInfo(): void {
    this.company = this.companyService.getCompanyInfo().pipe(
      catchError((err) => {
        return throwError(() => new Error(err));
      })
    );
  }
}
