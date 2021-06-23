import {Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("links")
class Link {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  shrinked: string;

  @Column()
  original: string;

  @Column()
  redirections: number;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }

    if(!this.redirections) {
      this.redirections = 0
    }
  }

}

export { Link }