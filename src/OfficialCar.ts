import { Car } from "./Car.js";

export class OfficialCar extends Car{
    
    #type:string = "Official";


    get type():string{
        return this.#type;
     }

}