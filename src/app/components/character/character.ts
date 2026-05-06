import { Component } from '@angular/core';
import { inject, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router'; //to allow the character cards to be clickable
import { ComicVineAPISerivce } from '../../myServices/comic-vine-apiserivce';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './character.html',
  styleUrl: './character.css',
})
export class Character implements OnInit {
  comicVineService = inject(ComicVineAPISerivce);
  route = inject(ActivatedRoute);
  //Activated route means that this component is being rendered as part of the route
  ngOnInit(){
    this.route.paramMap.subscribe(params => {
    const id= this.route.snapshot.paramMap.get('id');
    if (id){
      this.comicVineService.characterDetails.set(null);
      this.comicVineService.searchCharacterDetails(id);
    }
  });
  }
}