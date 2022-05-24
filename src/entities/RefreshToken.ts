import { Column, Entity, JoinColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("refresh")
export class RefreshToken{

    @PrimaryColumn()
    readonly id: string;

    @Column()
    expiresIn: number;

    @Column()
    userId: string;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
}