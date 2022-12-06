import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonText, NotificationFilter } from './filter';

@Component({
  selector: 'ntap-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  filters: NotificationFilter[] = ['todos', 'nao-lidos', 'lidos'];
  @Input() activeButton: NotificationFilter = 'todos';

  @Output() filterEvent = new EventEmitter<NotificationFilter>();

  getButtonText(filter: NotificationFilter) {
    return ButtonText[filter];
  }

  handleClick(buttonText: NotificationFilter) {
    this.filterEvent.emit(buttonText);
  }
}
