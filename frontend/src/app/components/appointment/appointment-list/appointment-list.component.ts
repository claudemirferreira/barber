import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { Appointment } from '../../../interfaces/appointment.interface';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    ToastModule,
    ToolbarModule,
    DropdownModule,
    CalendarModule
  ],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.scss'
})
export class AppointmentListComponent implements OnInit {
  appointments: Appointment[] = [];
  selectedAppointment: Appointment | null = null;
  displayDialog: boolean = false;
  newAppointment: boolean = false;
  appointment: Appointment = {
    barberId: 0,
    clientName: '',
    clientPhone: '',
    clientEmail: '',
    service: '',
    date: new Date(),
    time: '',
    status: 'scheduled',
    price: 0
  };

  barbers = [
    { id: 1, name: 'João Silva' },
    { id: 2, name: 'Pedro Santos' }
  ];

  services = [
    { label: 'Corte', value: 'Corte' },
    { label: 'Barba', value: 'Barba' },
    { label: 'Corte + Barba', value: 'Corte + Barba' },
    { label: 'Sobrancelha', value: 'Sobrancelha' }
  ];

  statuses = [
    { label: 'Agendado', value: 'scheduled' },
    { label: 'Concluído', value: 'completed' },
    { label: 'Cancelado', value: 'cancelled' }
  ];

  constructor() {}

  ngOnInit() {
    this.loadAppointments();
  }

  loadAppointments() {
    // Simulação de dados
    this.appointments = [
      {
        id: 1,
        barberId: 1,
        barberName: 'João Silva',
        clientName: 'Maria Santos',
        clientPhone: '(11) 97777-7777',
        clientEmail: 'maria@email.com',
        service: 'Corte + Barba',
        date: new Date(),
        time: '14:00',
        status: 'scheduled',
        price: 50
      },
      {
        id: 2,
        barberId: 2,
        barberName: 'Pedro Santos',
        clientName: 'José Oliveira',
        clientPhone: '(11) 96666-6666',
        clientEmail: 'jose@email.com',
        service: 'Barba',
        date: new Date(),
        time: '15:30',
        status: 'completed',
        price: 30
      }
    ];
  }

  showDialogToAdd() {
    this.newAppointment = true;
    this.appointment = {
      barberId: 0,
      clientName: '',
      clientPhone: '',
      clientEmail: '',
      service: '',
      date: new Date(),
      time: '',
      status: 'scheduled',
      price: 0
    };
    this.displayDialog = true;
  }

  save() {
    if (this.newAppointment) {
      this.appointments.push(this.appointment);
    } else {
      this.appointments[this.findSelectedAppointmentIndex()] = this.appointment;
    }

    this.appointments = [...this.appointments];
    this.displayDialog = false;
  }

  delete() {
    if (this.selectedAppointment) {
      this.appointments = this.appointments.filter(val => val.id !== this.selectedAppointment?.id);
      this.selectedAppointment = null;
    }
  }

  onRowSelect(event: any) {
    this.newAppointment = false;
    this.appointment = {...event.data};
    this.displayDialog = true;
  }

  findSelectedAppointmentIndex(): number {
    return this.appointments.findIndex(appointment => appointment.id === this.selectedAppointment?.id);
  }

  getStatusLabel(status: string): string {
    return this.statuses.find(s => s.value === status)?.label || status;
  }
}
