import { Component, OnInit } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { RocketsService } from 'src/app/rockets/services/rockets.http.service';
import { Rocket } from '../../models/rockets.model';
import {
  SearchBody,
  SearchOptions,
} from 'src/shared/paginated-response/paginated-response';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.scss'],
})
export class RocketsComponent implements OnInit {
  public rockets: Observable<Rocket[]>;
  public totalDocs: number;
  public offset: number;
  public limit: number;
  private search: string = '';

  constructor(private rocketsService: RocketsService) {}

  ngOnInit(): void {
    this.rockets = this.getRocketsQuery(this.search);
  }

  public setRockets(search: string): void {
    this.search = search;
    this.rockets = this.getRocketsQuery(search);
  }

  private getRocketsQuery(
    search: string,
    options?: SearchOptions
  ): Observable<Rocket[]> {
    const body: SearchBody = {
      query: {
        name: {
          $regex: search + '.*',
          $options: 'i',
        },
      },
      options: {
        offset: options?.offset,
        limit: options?.limit,
      },
    };
    return this.rocketsService.getRocketsQuery(body).pipe(
      tap((rockets) => {
        this.totalDocs = rockets.totalDocs;
        this.offset = rockets.offset;
        this.limit = rockets.limit;
      }),
      map((rockets) => rockets.docs),
      catchError((err) => {
        return throwError(() => new Error(err));
      })
    );
  }

  public handlePages(event: PageEvent): void {
    const options: SearchOptions = {
      offset: event.pageIndex,
      limit: event.pageSize,
    };
    this.rockets = this.getRocketsQuery(this.search, options);
  }
}
