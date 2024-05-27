import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() optionTitle?: string = '';
  @Output() closeEvent = new EventEmitter();

  constructor(public elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  close() {
    this.elementRef.nativeElement.remove();
    this.closeEvent.emit();
  }

}
