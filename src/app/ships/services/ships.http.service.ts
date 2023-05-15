import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ship } from '../models/ships.model';
import {
  PaginatedResponse,
  SearchBody,
} from 'src/shared/paginated-response/paginated-response';

@Injectable()
export class ShipsService {
  constructor(private http: HttpClient) {}

  public getShipsQuery(
    body: SearchBody
  ): Observable<PaginatedResponse<Ship[]>> {
    body.query = {
      ...body.query,
      image: { $ne: null },
    };
    return this.http.post<PaginatedResponse<Ship[]>>(
      `${environment.API_URL}ships/query`,
      body
    );
  }
}
