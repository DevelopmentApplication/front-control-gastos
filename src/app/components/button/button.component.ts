import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() text: string | undefined;
  @Input() type: string;
  @Input() iconType: string;
  @Input() onLoad: boolean;
  @Input() disabled: boolean;
  @Output() callback = new EventEmitter();

  onclick() {
    this.callback.emit();
  }
}