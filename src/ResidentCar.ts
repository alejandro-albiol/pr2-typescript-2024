import { Car } from "./Car.js";

export class ResidentCar extends Car{
    
    #type:string = "Resident";


    get type():string{
        return this.#type;
     }

}