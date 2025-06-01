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
import { Payment } from '../../../interfaces/payment.interface';

@Component({
  selector: 'app-payment-list',
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
  templateUrl: './payment-list.component.html',
  styleUrl: './payment-list.component.scss'
})
export class PaymentListComponent implements OnInit {
  payments: Payment[] = [];
  selectedPayment: Payment | null = null;
  displayDialog: boolean = false;
  newPayment: boolean = false;
  payment: Payment = {
    appointmentId: 0,
    barberId: 0,
    clientName: '',
    amount: 0,
    paymentMethod: 'cash',
    status: 'pending',
    paymentDate: new Date()
  };

  paymentMethods = [
    { label: 'Dinheiro', value: 'cash' },
    { label: 'Cartão de Crédito', value: 'credit' },
    { label: 'Cartão de Débito', value: 'debit' },
    { label: 'PIX', value: 'pix' }
  ];

  statuses = [
    { label: 'Pendente', value: 'pending' },
    { label: 'Concluído', value: 'completed' },
    { label: 'Cancelado', value: 'cancelled' }
  ];

  constructor() {}

  ngOnInit() {
    this.loadPayments();
  }

  loadPayments() {
    // Simulação de dados
    this.payments = [
      {
        id: 1,
        appointmentId: 1,
        barberId: 1,
        barberName: 'João Silva',
        clientName: 'Maria Santos',
        amount: 50,
        paymentMethod: 'credit',
        status: 'completed',
        paymentDate: new Date()
      },
      {
        id: 2,
        appointmentId: 2,
        barberId: 2,
        barberName: 'Pedro Santos',
        clientName: 'José Oliveira',
        amount: 30,
        paymentMethod: 'pix',
        status: 'pending',
        paymentDate: new Date()
      }
    ];
  }

  showDialogToAdd() {
    this.newPayment = true;
    this.payment = {
      appointmentId: 0,
      barberId: 0,
      clientName: '',
      amount: 0,
      paymentMethod: 'cash',
      status: 'pending',
      paymentDate: new Date()
    };
    this.displayDialog = true;
  }

  save() {
    if (this.newPayment) {
      this.payments.push(this.payment);
    } else {
      this.payments[this.findSelectedPaymentIndex()] = this.payment;
    }

    this.payments = [...this.payments];
    this.displayDialog = false;
  }

  delete() {
    if (this.selectedPayment) {
      this.payments = this.payments.filter(val => val.id !== this.selectedPayment?.id);
      this.selectedPayment = null;
    }
  }

  onRowSelect(event: any) {
    this.newPayment = false;
    this.payment = {...event.data};
    this.displayDialog = true;
  }

  findSelectedPaymentIndex(): number {
    return this.payments.findIndex(payment => payment.id === this.selectedPayment?.id);
  }

  getPaymentMethodLabel(method: string): string {
    return this.paymentMethods.find(m => m.value === method)?.label || method;
  }

  getStatusLabel(status: string): string {
    return this.statuses.find(s => s.value === status)?.label || status;
  }
}
