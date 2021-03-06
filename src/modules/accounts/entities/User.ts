import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';

import { v4 as uuidv4 } from 'uuid';

@Entity('users')
class User {
    @PrimaryGeneratedColumn()
    id: string;
    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    driver_licence: string;
    @Column()
    isAdmin: boolean;
    @CreateDateColumn()
    created_at: Date;


  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }

}

export { User };
