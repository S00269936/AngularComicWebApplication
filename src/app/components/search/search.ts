import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  searchTerm = '';
  @Output() search = new EventEmitter<string>();
  submitSearch(){
    this.search.emit(this.searchTerm);
  }
}
