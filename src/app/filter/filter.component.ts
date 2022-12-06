import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ntap-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  buttonTextList = ['Todos', 'Não lidos', 'Lidos'];
  activeButton = 'Lidos';

  @Output() filterEvent = new EventEmitter<string>();
}
