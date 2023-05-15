import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, catchError, map, switchMap, throwError } from 'rxjs';
import { RocketsService } from '../../services/rockets.http.service';
import { RocketObject } from '../../models/rockets.model';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.scss'],
})
export class RocketComponent implements OnInit {
  public rocket: Observable<RocketObject>;

  constructor(
    private route: ActivatedRoute,
    private rocketsService: RocketsService
  ) {}

  ngOnInit(): void {
    this.getRocketId();
  }

  private getRocketId(): void {
    this.rocket = this.route.params.pipe(
      map((params) => params['id']),
      switchMap((id) => {
        return this.getRocket(id);
      }),
      catchError((err) => {
        return throwError(() => new Error(err));
      })
    );
  }

  private getRocket(id: string): Observable<RocketObject> {
    return this.rocketsService.getRocket(id);
  }
}
