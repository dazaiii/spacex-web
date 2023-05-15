import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { RocketObject } from '../../models/rockets.model';

@Component({
  selector: 'app-rocket-info',
  templateUrl: './rocket-info.component.html',
  styleUrls: ['./rocket-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RocketInfoComponent implements OnInit {
  @Input() rocket: RocketObject | null;

  constructor() {}

  ngOnInit(): void {}
}
