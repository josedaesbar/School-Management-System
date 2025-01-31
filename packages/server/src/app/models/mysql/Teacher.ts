import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ITeacher, PersonStateType } from '@system/types';

import { User } from './User';

@Entity()
export class Teacher implements ITeacher {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @Column({
    type: 'enum',
    enum: PersonStateType,
    default: PersonStateType.ACTIVE,
  })
  state: PersonStateType;

  @Column('varchar')
  nickname: string;

  @Column('varchar')
  email: string;

  @Column({ type: 'char', length: 9 })
  phone: string;
}
