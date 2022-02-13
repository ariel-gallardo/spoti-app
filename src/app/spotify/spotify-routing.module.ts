import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenResolver } from '../resolvers/token.resolver';
import { HomeComponent } from './home/home.component';

export const SpotifyRoutes : Routes = [
  {path: 'home', component: HomeComponent, resolve: {token: TokenResolver}},
  {path: '', pathMatch: 'full', redirectTo: 'home'}
]

@NgModule({
  imports: [RouterModule.forChild(SpotifyRoutes)],
  exports: [RouterModule],
})
export class SpotifyRoutingModule { }
