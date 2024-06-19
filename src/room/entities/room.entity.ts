import { Booking } from '../../booking/entities/booking.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('rooms')
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  roomName: string;

  @Column({ nullable: true, default: 0 })
  content: number;

  @Column({ nullable: false })
  description: string;

  @Column({ default: true, nullable: false })
  isFree: boolean;

  @OneToMany(() => Booking, (booking) => booking.room)
  bookings: Booking[];
}
