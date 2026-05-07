import { Component, OnInit } from '@angular/core';
import { Favourites } from '../../myServices/favourites';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-favourites',
  imports: [FormsModule, RouterLink],
  templateUrl: './favourites.html',
  styleUrl: './favourites.css',
})
export class FavouritesComp implements OnInit {
  selectedFave: any = null;
  noteInput: string = '';
  constructor(public favouritesService: Favourites) {}
  ngOnInit() {
    this.favouritesService.getFavourites();
  }
  selectFave(fave: any) {
    this.selectedFave = fave; //sets selected fave
    this.noteInput = fave.note || ''; //pre-fills note input with existing note if available
  }
 saveNote(){
  if (!this.selectedFave) return; 
  this.favouritesService.updateNote(this.selectedFave._id, this.noteInput).subscribe(() => {
    this.selectedFave.note = this.noteInput; //update the local selectedFave with the new note after successful update
    this.noteInput = '';
    this.favouritesService.getFavourites(); //refresh the favourites list to reflect the updated note
  })
  
 }
  delete(id:string){
    this.favouritesService.deleteFavourite(id);
    this.selectedFave = null; //deselect the favourite after deletion
  }
}