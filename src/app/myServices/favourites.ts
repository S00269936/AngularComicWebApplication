import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroments/environments';
import { CharacterDetails } from '../models/character-details.interface';

@Injectable({
  providedIn: 'root',
})
export class Favourites {
  private _apiUrl = environment.apiUrl + '/favourites';
  private _http = inject(HttpClient);
  public favourites = signal<any[]>([]);
  getFavourites() {
    this._http.get<any[]>(this._apiUrl).subscribe((data) => {
      this.favourites.set(data);
    });
  }
  addFavourite(character: CharacterDetails) {
    const favourite = {
      characterId: character.id,
      name: character.name,
      real_name: character.real_name,
      aliases: character.aliases,
      image: character.image,
      publisher: character.publisher,
      deck: character.deck,
      powers: character.powers,
      note: '' //empty for user to fill in
    };
    this._http.post(this._apiUrl, favourite).subscribe(() => {
      this.getFavourites(); //refresh the list after adding a favourite
    });
}
  updateNote(id: string, note: string) {
    const url = this._apiUrl + '/note/' + id;
      return this._http.patch(url, {note});
}
  deleteFavourite(id: string){
    const url = this._apiUrl + '/' + id;
    this._http.delete(url).subscribe(() => {
      this.getFavourites(); //refresh the list after deleting a favourite
    });
  }
}
