import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenResolver } from './resolvers/token.resolver';
import { HomeComponent } from './spotify/home/home.component';
import { SpotifyRoutes } from './spotify/spotify-routing.module';
import { SpotifyComponent } from './spotify/spotify.component';

const routes: Routes = [
  {  
    path: '', /*component: SpotifyComponent, children: SpotifyRoutes,*/
    children:[
      {
        path: '',
        loadChildren: () => import('./spotify/spotify.module').then(module => module.SpotifyModule),
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
