import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-class-item',
  templateUrl: './on-class-item.component.html',
  styleUrls: ['./on-class-item.component.scss']
})
export class OnClassItemComponent implements OnInit {
  @Input() optionTitle: string = '';
  @Input() optionDescription: string = '';
  @Input() optionIcon: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
