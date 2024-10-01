import { Car } from "./Car.js";

export class RegularCar extends Car{
    
    #type:string = "Regular";


    get type():string{
        return this.#type;
     }

}