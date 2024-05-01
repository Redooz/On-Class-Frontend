import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar-item',
  templateUrl: './side-bar-item.component.html',
  styleUrls: ['./side-bar-item.component.scss']
})
export class SideBarItemComponent implements OnInit {
  @Input() optionRoute: string = '';
  @Input() optionIcon: string = '';
  @Input() optionLabel: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
