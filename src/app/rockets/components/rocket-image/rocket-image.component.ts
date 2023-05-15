import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-rocket-image',
  templateUrl: './rocket-image.component.html',
  styleUrls: ['./rocket-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RocketImageComponent implements OnInit {
  @Input() images: string[] | undefined;

  constructor() {}

  ngOnInit(): void {}

  trackByMethod(index: number, el: any): number {
    return el.id;
  }
}
