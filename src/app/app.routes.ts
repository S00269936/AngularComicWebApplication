import { Routes } from '@angular/router';
import { Character } from './components/character/character';
import { About } from './components/about/about';
import { Favourites } from './components/favourites/favourites';

export const routes: Routes = [
    {path: 'character/:id', component: Character},
    {path: 'about', component: About},
    {path: 'favourites', component: Favourites},
];
