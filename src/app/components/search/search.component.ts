import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  inputSearch = new FormControl('');
  @Output() submited = new EventEmitter<string>();



  ngOnInit(): void {
    this.onChange();
  }

  private onChange():void {
    this.inputSearch.valueChanges
    .pipe(
      map( (search: string) => search.trim()),
      debounceTime(700),
      distinctUntilChanged(),
      filter( (search: string) => search !== '' ),
      tap( (search: string) => this.submited.emit(search))
    )
    .subscribe();
  }

}
