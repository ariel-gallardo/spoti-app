import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map, Observable, of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import Token from './Interfaces/IToken';
import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class TokenResolver implements Resolve<Observable<Token>> {

  /**
   *
   */
  constructor(private http : HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Token> {
    
    const {client_id, client_secret} = environment

    const body = "grant_type=client_credentials"
    const options = {
        headers: new HttpHeaders({
          Authorization:
            `Basic ${Buffer.from(`${client_id}:${client_secret}`).toString('base64')}`,
            'Content-Type': 'application/x-www-form-urlencoded'	
        })
    }

    const response = this.http.post('https://accounts.spotify.com/api/token',body,options) as Observable<Token>
    
    return response; 
  }
}
