import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Rocket } from '../../models/rockets.model';

@Component({
  selector: 'app-rocket-box',
  templateUrl: './rocket-box.component.html',
  styleUrls: ['./rocket-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RocketBoxComponent implements OnInit {
  @Input() rockets: Observable<Rocket[]>;

  constructor() {}

  ngOnInit(): void {}

  trackByMethod(index: number, el: any): number {
    return el.id;
  }
}
