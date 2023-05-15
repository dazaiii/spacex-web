import { Component, OnInit } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { ShipsService } from '../../services/ships.http.service';
import {
  SearchBody,
  SearchOptions,
} from 'src/shared/paginated-response/paginated-response';
import { Ship } from '../../models/ships.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss'],
})
export class ShipsComponent implements OnInit {
  public ships: Observable<any>;
  public totalDocs: number;
  public offset: number;
  public limit: number;
  private search: string = '';

  constructor(private shipsService: ShipsService) {}

  ngOnInit(): void {
    this.ships = this.getShipsQuery(this.search);
  }

  public setShips(search: string): void {
    this.search = search;
    this.ships = this.getShipsQuery(search);
  }

  private getShipsQuery(
    search: string,
    options?: SearchOptions
  ): Observable<Ship[]> {
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
    return this.shipsService.getShipsQuery(body).pipe(
      tap((ships) => {
        this.totalDocs = ships.totalDocs;
        this.offset = (ships.page - 1) * ships.limit;
        this.limit = ships.limit;
      }),
      map((ships) => ships.docs),
      catchError((err) => {
        return throwError(() => new Error(err));
      })
    );
  }

  public handlePages(event: PageEvent): void {
    const options: SearchOptions = {
      offset: event.pageIndex * event.pageSize,
      limit: event.pageSize,
    };
    this.ships = this.getShipsQuery(this.search, options);
  }
}
