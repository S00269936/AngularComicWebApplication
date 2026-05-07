import { Component, OnInit } from '@angular/core';
import { Favourites } from '../../myServices/favourites';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-favourites',
  imports: [FormsModule],
  templateUrl: './favourites.html',
  styleUrl: './favourites.css',
})
export class FavouritesComp implements OnInit {
  selectedFave: any = null;
  constructor(public favouritesService: Favourites) {}
  ngOnInit() {
    this.favouritesService.getFavourites();
  }
  selectFave(fave: any) {
    this.selectedFave = fave; //sets selected fave
  }
  updateNote(fave: any){
    this.favouritesService.updateNote(fave.id, fave.note); //updates note
  }
  delete(id:string){
    this.favouritesService.deleteFavourite(id);
    this.selectedFave = null; //deselect the favourite after deletion
  }
}