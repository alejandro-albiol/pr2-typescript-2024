export class ParkLogEntry {
    #plate: string;
    #checkInDate: Date;
    #checkOutDate?: Date;

    set checkOutDate(now:number){
        this.#checkOutDate = new Date(now);
    }

    constructor(plate:string){
        this.#plate = plate;
        this.#checkInDate = new Date(Date.now());
    }


    print():string{
        return `${this.#plate}     ${this.#checkInDate}       ${this.#checkOutDate}`;
    }
}