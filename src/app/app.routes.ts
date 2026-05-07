import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Character } from './components/character/character';
import { About } from './components/about/about';
import { FavouritesComp } from './components/favourites/favourites';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'character/:id', component: Character},
    {path: 'about', component: About},
    {path: 'favourites', component: FavouritesComp},
];
