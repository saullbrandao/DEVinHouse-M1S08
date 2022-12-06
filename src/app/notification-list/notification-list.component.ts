import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationFilter } from '../filter/filter';

@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss'],
})
export class NotificationListComponent implements OnInit {
  filter: NotificationFilter = 'todos';
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

  constructor(private router: Router, private route: ActivatedRoute) {}

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

  setFilter(filter: NotificationFilter) {
    this.router.navigate([`/home/${filter}`]);
  }

  getFilteredNotifications(filter: NotificationFilter): any {
    switch (filter) {
      case 'lidos':
        return this.notifications.filter(
          (notification) => notification.isRead === true
        );
      case 'nao-lidos':
        return this.notifications.filter(
          (notification) => notification.isRead === false
        );
      default:
        return this.notifications;
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.filter = param['filter'];
    });
  }
}
