import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'album',
  templateUrl: 'album.component.html',
  styleUrls: ['album.component.scss']
})
export class AlbumComponent implements OnInit {
  constructor(
    public router: Router
  ) { }
  ngOnInit() { }
}
