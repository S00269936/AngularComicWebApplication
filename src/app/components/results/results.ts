import { Component, Input } from '@angular/core';
import { CharacterResult } from '../../models/character-details.interface';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [],
  templateUrl: './results.html',
  styleUrl: './results.css',
})
export class Results {
  @Input() characters: CharacterResult[] = [];
}
