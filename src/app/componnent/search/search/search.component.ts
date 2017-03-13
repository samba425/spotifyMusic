import { Component, OnInit } from '@angular/core';
import { SpotifyserviceService } from '../../../spotifyservice.service';
import { Artist } from '../../../../artist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[SpotifyserviceService]
})
export class SearchComponent implements OnInit {
searchStr:string;
searchRes: Artist[];

  constructor(private _spotifyService:SpotifyserviceService) { }

  searchMusic(){
    this._spotifyService.searchMusic(this.searchStr)
      .subscribe(res => {
        this.searchRes = res.artists.items;
      })
  }

  ngOnInit() {
  }

}
