import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NvbarComponent } from './componnent/nvbar/nvbar.component';
import { AboutComponent } from './componnent/about/about/about.component';
import { SearchComponent } from './componnent/search/search/search.component';
import { routing} from './app.routes';
import { SpotifyserviceService } from './spotifyservice.service';
import { ArtistComponent } from './componnent/Artist/artist/artist.component';
import { AlbumComponent } from './componnent/Album/album/album.component';

@NgModule({
  declarations: [
    AppComponent,
    NvbarComponent,
    AboutComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   routing
  ],
  providers: [SpotifyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
