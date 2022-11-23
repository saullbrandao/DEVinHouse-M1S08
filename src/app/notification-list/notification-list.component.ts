import { Component } from '@angular/core';

@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss'],
})
export class NotificationListComponent {
  notifications = [
    {
      title: 'Notificação 1',
      subtitle: 'Lorem ipsum dolor sit amet.',
      date: new Date('2022/11/22'),
    },
    {
      title: 'Notificação 2',
      subtitle: 'Lorem ipsum dolor sit amet.',
      date: new Date('2022/11/20'),
    },
    {
      title: 'Notificação 3',
      subtitle: 'Lorem ipsum dolor sit amet.',
      date: new Date('2022/11/19'),
    },
  ];
}
