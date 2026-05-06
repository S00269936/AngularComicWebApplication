import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterDetails, CharacterResult, CharacterSearchResults } from '../models/character-details.interface';
import { environment } from '../../enviroments/environments';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ComicVineAPISerivce {
  private apiUrl = environment.apiUrl; //links to backend

  characters = signal<CharacterResult[]>([]);
  errorMessage = signal<string>('');
  constructor(private http: HttpClient) {}

  searchCharacters(query: string) {
    this.errorMessage.set(''); // Clear previous error message
    const url = `${this.apiUrl}/characters/search?query=${encodeURIComponent(query)}`;
    this.http.get<CharacterSearchResults>(url).pipe(take(1)).subscribe({
      next: (data) => {
        console.log(data);
        this.characters.set(data.results);
      },
      error: () => {
        console.error(Error);
        this.characters.set([]); // Clear previous results
        this.errorMessage.set('An error occurred while fetching character data. Please try again later.');
      }
    });
}
}
