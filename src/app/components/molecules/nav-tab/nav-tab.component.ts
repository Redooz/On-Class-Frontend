import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-tab',
  templateUrl: './nav-tab.component.html',
  styleUrls: ['./nav-tab.component.scss']
})
export class NavTabComponent implements OnInit {
  public tabs = [
    {
      title: 'Tecnologias',
      route: '/library/technologies'
    },
    {
      title: 'Capacidades',
      route: '/library/capacities'
    },
    {
      title: 'Bootcamps',
      route: '/library/bootcamps'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
