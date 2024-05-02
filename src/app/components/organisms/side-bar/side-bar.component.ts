import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  public menuItems = [
    {
      optionIcon: 'home',
      optionLabel: 'Inicio',
      optionRoute: '/home'
    },
    {
      optionIcon: 'book',
      optionLabel: 'Biblioteca',
      optionRoute: '/library'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
