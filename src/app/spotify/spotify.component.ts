import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import Token from '../resolvers/Interfaces/IToken'
import { SpotifyService } from './spotify.service';

interface ITokenData{
  token: Token
}

@Component({
  selector: 'app-spotify',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class SpotifyComponent implements OnInit {

  constructor(private route : ActivatedRoute, private spotifyService : SpotifyService) {
    
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.spotifyService.setToken((data as ITokenData).token))
  }

}
