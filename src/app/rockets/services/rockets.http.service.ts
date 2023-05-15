import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Rocket, RocketObject } from '../models/rockets.model';
import { Observable } from 'rxjs';
import {
  PaginatedResponse,
  SearchBody,
} from 'src/shared/paginated-response/paginated-response';

@Injectable()
export class RocketsService {
  constructor(private http: HttpClient) {}

  public getRocket(rocketId: string): Observable<RocketObject> {
    return this.http.get<RocketObject>(
      `${environment.API_URL}rockets/${rocketId}`
    );
  }

  public getRocketsQuery(
    body: SearchBody
  ): Observable<PaginatedResponse<Rocket[]>> {
    return this.http.post<PaginatedResponse<Rocket[]>>(
      `${environment.API_URL}rockets/query`,
      body
    );
  }
}
