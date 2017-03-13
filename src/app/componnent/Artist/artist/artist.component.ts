import { Component, OnInit } from '@angular/core';
import { SpotifyserviceService } from '../../../spotifyservice.service';
import { Artist } from '../../../../artist';
import { Album } from '../../../../album';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
    providers:[SpotifyserviceService]
})
export class ArtistComponent implements OnInit {
   
    id:string;
    artist:Artist[];
    albums:Album[];
  constructor(private _spotifyservice:SpotifyserviceService,
              private _route:ActivatedRoute) { }

  ngOnInit() {
    this._route.params
        .map(params => params['id'])
        .subscribe((id) => {
          this._spotifyservice.getArtist(id)
          .subscribe(artist => {
            this.artist = artist;
          })
           
                this._spotifyservice.getAlbums(id)
                    .subscribe(albums => {
                        this.albums = albums.items;
                    })
            })
    }
}
