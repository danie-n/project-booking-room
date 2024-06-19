import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: '0.0.0.0',
  port: 5435,
  username: 'root',
  password: 'root',
  database: 'booking',
  migrations: ['src/database/migrations/*.ts'],
  entities: ['src/**/*.entity{.ts,.js}'],
  synchronize: false,
  logging: true,
});
