import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ship } from '../../models/ships.model';

@Component({
  selector: 'app-ship-box',
  templateUrl: './ship-box.component.html',
  styleUrls: ['./ship-box.component.scss'],
})
export class ShipBoxComponent implements OnInit {
  @Input() ships: Observable<Ship[]>;
  constructor() {}

  ngOnInit(): void {}
}
