import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <spotify-navbar></spotify-navbar>
    <router-outlet>
    </router-outlet>
  `,
  styles: []
})
export class AppComponent {

}
