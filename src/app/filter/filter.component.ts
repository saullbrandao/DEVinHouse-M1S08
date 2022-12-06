import { Component } from '@angular/core';

@Component({
  selector: 'ntap-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  buttons = ['Todos', 'Não lidos', 'Lidos'];
  activeButton = 'Lidos';
}
