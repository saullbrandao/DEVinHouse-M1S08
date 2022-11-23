import { Component } from '@angular/core';

@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss'],
})
export class NotificationListComponent {
  notifications = [
    {
      id: 1,
      title: 'Notificação 1',
      subtitle: 'Lorem ipsum dolor sit amet.',
      date: new Date('2022/11/22'),
      isRead: false,
    },
    {
      id: 2,
      title: 'Notificação 2',
      subtitle: 'Lorem ipsum dolor sit amet.',
      date: new Date('2022/11/20'),
      isRead: false,
    },
    {
      id: 3,
      title: 'Notificação 3',
      subtitle: 'Lorem ipsum dolor sit amet.',
      date: new Date('2022/11/19'),
      isRead: false,
    },
  ];

  setReadStatus(id: number) {
    const changedNotifications = this.notifications.map((notification) => {
      if (notification.id === id) {
        return {
          ...notification,
          isRead: true,
        };
      } else {
        return notification;
      }
    });

    this.notifications = changedNotifications;
  }
}
