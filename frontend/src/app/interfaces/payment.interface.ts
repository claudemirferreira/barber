export interface Payment {
    id?: number;
    appointmentId: number;
    barberId: number;
    barberName?: string;
    clientName: string;
    amount: number;
    paymentMethod: 'cash' | 'credit' | 'debit' | 'pix';
    status: 'pending' | 'completed' | 'cancelled';
    paymentDate: Date;
    notes?: string;
    createdAt?: Date;
    updatedAt?: Date;
} 