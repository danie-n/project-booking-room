import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Room } from '../../room/entities/room.entity';
import { TimeSlot } from '../../time-slot/entities/time-slot.entity';
//import { TimerOptions } from 'timers';

@Entity('bookings')
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.bookings, { nullable: false })
  user: User;

  @ManyToOne(() => Room, (room) => room.bookings, { nullable: false })
  room: Room;

  @OneToOne(() => TimeSlot, { nullable: false })
  @JoinColumn()
  timeSlots: TimeSlot;
}
