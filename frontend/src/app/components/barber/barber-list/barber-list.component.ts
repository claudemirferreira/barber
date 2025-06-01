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
import { Barber } from '../../../interfaces/barber.interface';

@Component({
  selector: 'app-barber-list',
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
    DropdownModule
  ],
  templateUrl: './barber-list.component.html',
  styleUrl: './barber-list.component.scss'
})
export class BarberListComponent implements OnInit {
  barbers: Barber[] = [];
  selectedBarber: Barber | null = null;
  displayDialog: boolean = false;
  newBarber: boolean = false;
  barber: Barber = {
    name: '',
    email: '',
    phone: '',
    specialties: [],
    status: 'active'
  };

  constructor() {}

  ngOnInit() {
    // Aqui você carregará os dados do backend
    this.loadBarbers();
  }

  loadBarbers() {
    // Simulação de dados
    this.barbers = [
      {
        id: 1,
        name: 'João Silva',
        email: 'joao@email.com',
        phone: '(11) 99999-9999',
        specialties: ['Corte', 'Barba'],
        status: 'active'
      },
      {
        id: 2,
        name: 'Pedro Santos',
        email: 'pedro@email.com',
        phone: '(11) 98888-8888',
        specialties: ['Corte', 'Barba', 'Sobrancelha'],
        status: 'active'
      }
    ];
  }

  showDialogToAdd() {
    this.newBarber = true;
    this.barber = {
      name: '',
      email: '',
      phone: '',
      specialties: [],
      status: 'active'
    };
    this.displayDialog = true;
  }

  save() {
    if (this.newBarber) {
      this.barbers.push(this.barber);
    } else {
      this.barbers[this.findSelectedBarberIndex()] = this.barber;
    }

    this.barbers = [...this.barbers];
    this.displayDialog = false;
  }

  delete() {
    if (this.selectedBarber) {
      this.barbers = this.barbers.filter(val => val.id !== this.selectedBarber?.id);
      this.selectedBarber = null;
    }
  }

  onRowSelect(event: any) {
    this.newBarber = false;
    this.barber = {...event.data};
    this.displayDialog = true;
  }

  findSelectedBarberIndex(): number {
    return this.barbers.findIndex(barber => barber.id === this.selectedBarber?.id);
  }
}
