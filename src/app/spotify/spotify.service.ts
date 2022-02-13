import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import Token from '../resolvers/Interfaces/IToken';
import Album from './Interfaces/IAlbum';
import AlbumData, { IAlbumResumeData } from './Interfaces/IAlbumData';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private static headers : HttpHeaders
  private static expires_in : number

  private BaseUrl : string = 'https://api.spotify.com/v1/browse'
  private NewReleasesUrl : string = 'new-releases'

  public setToken(token : Token){
    SpotifyService.headers = new HttpHeaders({
      Authorization: `${token.token_type} ${token.access_token}`,
      'Content-Type': 'application/json'
    })
    SpotifyService.expires_in = Number(token.expires_in)
  }

  constructor(private httpServices : HttpClient) {

  }

  private getUrl(site : string) : string{
    return `${this.BaseUrl}/${site}`
  }

  private toAlbums(albumResume : Observable<IAlbumResumeData[]>) : Observable<Album[]>{ 
    return albumResume.pipe(map(albumResume =>{
          return albumResume.map(album => {
            return {
              nombre: album.name,
              artistas: album.artists.map(artist => artist.name),
              imagen: album.images[0].url
            } as Album
          })
    }))
  }

  public getNewReleases() : Observable<Album[]>{

    const albumResume = 
    this.httpServices.get(
      this.getUrl(this.NewReleasesUrl),
      {headers: SpotifyService.headers
    })
    .pipe(
      map(data => (data as AlbumData).albums.items)
    );

    return this.toAlbums(albumResume);

  }


  

}
