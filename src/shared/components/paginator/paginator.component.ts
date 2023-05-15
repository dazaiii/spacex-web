import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  @Input() totalDocs: number;
  @Input() offset: number;
  @Input() limit: number;
  @Input() page: number;
  @Output() paginatorEvent: EventEmitter<PageEvent> =
    new EventEmitter<PageEvent>();

  constructor() {}

  ngOnInit(): void {}

  public handlePageEvent(event: PageEvent) {
    this.paginatorEvent.emit(event);
  }
}
