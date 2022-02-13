import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotifyRoutingModule } from './spotify-routing.module';
import { HomeComponent } from './home/home.component';
import { AlbumItemComponent } from './album-item/album-item.component';
import { TokenResolver } from '../resolvers/token.resolver';

@NgModule({
  declarations: [
    HomeComponent,
    AlbumItemComponent
  ],
  imports: [
    CommonModule,
    SpotifyRoutingModule,
  ],
  providers:[
    
  ]
})
export class SpotifyModule { }
