import { Component, Input } from '@angular/core';
import { CharacterResult } from '../../models/character-details.interface';
import { RouterLink } from '@angular/router'; //to allow the character cards to be clickable

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './results.html',
  styleUrl: './results.css',
})
export class Results {
  @Input() characters: CharacterResult[] = [];

  //Pagination
  currentPage: number = 1;
  pageSize: number = 6;
  get totalPages(){
    return Math.ceil(this.characters.length / this.pageSize);
    //calculates total pages based on number oc characters and page size
  }
  get paginatedCharacters(){
    const start = (this.currentPage - 1) * this.pageSize;
    return this.characters.slice(start, start + this.pageSize);
  }
  nextPage(){
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
  previousPage(){
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
