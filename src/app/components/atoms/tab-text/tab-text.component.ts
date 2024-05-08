import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-text',
  templateUrl: './tab-text.component.html',
  styleUrls: ['./tab-text.component.scss']
})
export class TabTextComponent implements OnInit {
  @Input() optionText: string = '';
  @Input() optionRoute: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
