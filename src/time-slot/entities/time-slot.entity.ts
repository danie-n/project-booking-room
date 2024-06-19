import { Booking } from '../../booking/entities/booking.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

//import { TimerOptions } from 'timers';

@Entity('timeSlots')
export class TimeSlot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'time' })
  startTime: string; // Use the imported 'Time' type

  @Column({ nullable: false, type: 'time' })
  endTime: string; // Use the imported 'Time' type

  @OneToMany(() => Booking, (booking) => booking.room)
  bookings: Booking[];
}
