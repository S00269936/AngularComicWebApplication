import { Routes } from '@angular/router';
import { Character } from './components/character/character';

export const routes: Routes = [
    {path: 'character/:id', component: Character}
];
