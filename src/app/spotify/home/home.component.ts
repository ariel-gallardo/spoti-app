import { Component, OnInit } from '@angular/core';
import Album from '../Interfaces/IAlbum';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  public albums : Album[] = []

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.spotifyService.getNewReleases().subscribe(albums => this.albums = albums)
  }

}
