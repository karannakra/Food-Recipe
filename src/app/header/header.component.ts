import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  routes = [
    { name: 'Recipes', path: '/recipes' },
    { name: 'Shopping List', path: '/shopping-list' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
