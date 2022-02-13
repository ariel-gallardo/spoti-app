import { Component, Input, OnInit } from '@angular/core';
import IAlbum from '../Interfaces/IAlbum';

@Component({
  selector: 'album-item',
  templateUrl: './album-item.component.html',
  styles: [
  ]
})
export class AlbumItemComponent implements OnInit {

  @Input() public album : IAlbum = {} as IAlbum

  constructor() {

  }

  ngOnInit(): void {
  }

}
