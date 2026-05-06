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
}
