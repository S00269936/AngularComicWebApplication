import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterDetails } from '../models/character-details.interface';
import { environment } from '../../enviroments/environments';

@Injectable({
  providedIn: 'root',
})
export class ComicVineAPISerivce {
  private apiUrl = environment.apiUrl; //links to backend
}

