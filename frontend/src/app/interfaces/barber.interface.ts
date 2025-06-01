export interface Barber {
    id?: number;
    name: string;
    email: string;
    phone: string;
    specialties: string[];
    photo?: string;
    status: 'active' | 'inactive';
    createdAt?: Date;
    updatedAt?: Date;
} 