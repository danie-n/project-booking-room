import { Test, TestingModule } from '@nestjs/testing';
import { RoomService } from './room.service';
import { Room } from './entities/room.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('RoomService', () => {
  let service: RoomService;
  let roomRepository: Repository<Room>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RoomService,
        {
          provide: getRepositoryToken(Room),
          useValue: {
            find: jest.fn(),
            findByOne: jest.fn(),
            save: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<RoomService>(RoomService);
    roomRepository = module.get(getRepositoryToken(Room));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should return an array of rooms', async () => {
    const rooms = [
      {
        id: 1,
        roomName: 'Room 1',
        content: 10,
        description: 'Room 1',
        isFree: true,
        bookings: [],
      },
      {
        id: 2,
        roomName: 'Room 2',
        content: 20,
        description: 'Room 2',
        isFree: false,
        bookings: [],
      },
    ];
    jest.spyOn(roomRepository, 'find').mockResolvedValue(rooms);
    expect(await roomRepository.find()).toEqual(rooms);
  });

  it('should return a room', async () => {
    const room = {
      id: 1,
      roomName: 'Room 1',
      content: 10,
      description: 'Room 1',
      isFree: true,
      bookings: [],
    };
    jest.spyOn(service, 'findOne').mockResolvedValue(room);
    expect(await service.findOne(1)).toEqual(room);
  });

  it('should create a room', async () => {
    const room = {
      id: 2,
      roomName: 'Room 2',
      content: 10,
      description: 'Room 2',
      isFree: true,
      bookings: [],
    };
    jest.spyOn(roomRepository, 'save').mockResolvedValue(room);
    expect(await roomRepository.save(room)).toEqual(room);
  });
});
