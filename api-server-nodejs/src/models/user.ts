import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  email: string;

  @Column()
  birthDate: Date;

  @Column()
  gender: string;

  @Column()
  phone: string;

  @Column()
  phone2: string;

  @Column()
  cpf: string;

  @Column()
  cnpj: string;

  @Column()
  registration: string;

  @Column()
  obs: string;

  @Column()
  address: string;

  @Column()
  number: string;

  @Column()
  complement: string;

  @Column()
  district: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column() 
  country: string;

  @Column()
  zipCode: string;

  @Column()
  unit: string;

  @Column()
  sector: string;

  @Column()
  role: string;

  @Column()
  institution: string;
  
}