import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.scss']
})
export class ModalMessageComponent implements OnInit {
  @Input() optionLabel: string = 'Success!';
  @Input() isSuccessful: boolean = true;
  @Output() closeEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.closeEvent.emit();
  }

}
