
import {  Routes, RouterModule }   from '@angular/router';
import { AboutComponent } from './componnent/about/about/about.component';
import { SearchComponent } from './componnent/search/search/search.component';
import { AppComponent } from './app.component';
import { NvbarComponent } from './componnent/nvbar/nvbar.component';
import { ArtistComponent } from './componnent/Artist/artist/artist.component';
import { AlbumComponent } from './componnent/Album/album/album.component';

const appRoutes: Routes = [
    {path:'', component: SearchComponent},
    {path:'about', component: AboutComponent},
    {path:'search', component: SearchComponent},
    {path:'artist/:id', component:ArtistComponent},
    {path:'album/:id', component:AlbumComponent}

]

export const routing = RouterModule.forRoot(appRoutes);