import { Entity, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn()
  name: string;
}
