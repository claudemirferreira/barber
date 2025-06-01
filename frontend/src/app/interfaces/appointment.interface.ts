export interface Appointment {
    id?: number;
    barberId: number;
    barberName?: string;
    clientName: string;
    clientPhone: string;
    clientEmail: string;
    service: string;
    date: Date;
    time: string;
    status: 'scheduled' | 'completed' | 'cancelled';
    price: number;
    notes?: string;
    createdAt?: Date;
    updatedAt?: Date;
} 