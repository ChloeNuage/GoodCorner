import { BaseEntity, Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Ad from "./Ad";

@Entity()
class Tag extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Ad, (ad) => ad.category)
  ads: Ad[];

  @ManyToMany(() => Ad, (ad) => ad.tags)
  ad: Ad[];
} 

export default Tag;