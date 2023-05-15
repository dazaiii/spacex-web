import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from '../models/company.model';

@Injectable()
export class CompanyService {
  constructor(private http: HttpClient) {}

  public getCompanyInfo(): Observable<Company> {
    return this.http.get<Company>(`${environment.API_URL}company`);
  }
}
