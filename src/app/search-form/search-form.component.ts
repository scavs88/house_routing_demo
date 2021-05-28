import { Component,Output, EventEmitter , OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Output() submitsearch = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  submitSearch(form:NgForm):void{
    let searchTerm:string = form.form.value.Type;
    this.submitsearch.emit(searchTerm);
  }
}
