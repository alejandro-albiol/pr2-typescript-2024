export class Car {

    #plate: string;

    constructor(plate: string, type: string){
        this.#plate = plate;
    }

    get plate():string{
        return this.#plate;
    }


}