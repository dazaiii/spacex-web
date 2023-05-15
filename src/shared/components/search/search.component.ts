import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, of, tap } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() searchEvent: EventEmitter<any> = new EventEmitter<any>();
  public search: FormControl = new FormControl('');

  constructor() {}

  ngOnInit(): void {
    this.onSearchChanges();
  }

  private onSearchChanges(): void {
    this.search.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap((search) => this.searchEvent.emit(search))
      )
      .subscribe();
  }
}
