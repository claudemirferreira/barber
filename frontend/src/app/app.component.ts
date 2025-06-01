import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PanelMenuModule,
    ButtonModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Barber Shop';
  menuItems: MenuItem[] = [
    {
      label: 'Barbeiros',
      icon: 'pi pi-users',
      routerLink: '/barbers'
    },
    {
      label: 'Agendamentos',
      icon: 'pi pi-calendar',
      routerLink: '/appointments'
    },
    {
      label: 'Pagamentos',
      icon: 'pi pi-money-bill',
      routerLink: '/payments'
    }
  ];
}
