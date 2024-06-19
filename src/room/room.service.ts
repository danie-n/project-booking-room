import { Injectable, Post } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

import { Room } from './entities/room.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room)
    private roomRepository: Repository<Room>,
  ) {}

  create(createRoomDto: CreateRoomDto) {
    return this.roomRepository.save(createRoomDto);
  }

  // async create(
  //   roomName: string,
  //   content: number,
  //   description: string,
  //   isFree: boolean,
  // ): Promise<Room> {
  //   const room = new Room();
  //   room.roomName = roomName;
  //   room.content = content;
  //   room.description = description;
  //   room.isFree = isFree;
  //   return this.roomRepository.save(room);
  // }

  findAll(): Promise<Room[]> {
    return this.roomRepository.find();
  }

  findOne(id: number): Promise<Room | null> {
    return this.roomRepository.findOneBy({ id });
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    return this.roomRepository.update(id, updateRoomDto);
  }

  async remove(id: number): Promise<void> {
    await this.roomRepository.delete(id);
  }
}
