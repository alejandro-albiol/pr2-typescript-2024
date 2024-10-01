import { Car } from "./Car";

export class RegularCar extends Car{
    
    #type:string = "Regular";


    get type():string{
        return this.#type;
     }

}