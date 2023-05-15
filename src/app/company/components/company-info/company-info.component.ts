import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../../models/company.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss'],
})
export class CompanyInfoComponent implements OnInit {
  @Input() company: Company | null;

  constructor() {}

  ngOnInit(): void {}
}
