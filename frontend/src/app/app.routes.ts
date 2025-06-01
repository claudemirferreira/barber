import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { BarberListComponent } from './components/barber/barber-list/barber-list.component';
import { AppointmentListComponent } from './components/appointment/appointment-list/appointment-list.component';
import { PaymentListComponent } from './components/payment/payment-list/payment-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'barbers', component: BarberListComponent },
  { path: 'appointments', component: AppointmentListComponent },
  { path: 'payments', component: PaymentListComponent },
  { path: '**', redirectTo: '/login' }
];
