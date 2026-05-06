import { Component } from '@angular/core';
import { ComicVineAPISerivce } from '../../myServices/comic-vine-apiserivce';
import { inject } from '@angular/core';
import { Search } from "../search/search";
import { Results } from '../results/results';

@Component({
  selector: 'app-home',
  imports: [Search, Results],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  comicVineService = inject(ComicVineAPISerivce);
  onSearch(query: string) {
    this.comicVineService.searchCharacters(query);
  }
}
