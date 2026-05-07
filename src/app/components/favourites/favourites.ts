import { Component, OnInit } from '@angular/core';
import { Favourites } from '../../myServices/favourites';

@Component({
  selector: 'app-favourites',
  imports: [],
  templateUrl: './favourites.html',
  styleUrl: './favourites.css',
})
export class FavouritesComp implements OnInit {
  constructor(public favouritesService: Favourites) {}
  ngOnInit() {
    this.favouritesService.getFavourites();
  }
}