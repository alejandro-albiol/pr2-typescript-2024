import { OfficialCar } from "./OfficialCar.js";
import { ResidentCar } from "./ResidentCar.js";

export class Park{
    #officialCars:String[]=[];
    #residentCars:String[]=[];

    get officialCars():String[]{
        return this.#officialCars;
    }

    get residentCars():String[]{
        return this.#residentCars;
    }

    addOfficialCar(car:OfficialCar):void{
        this.#officialCars.push(car.plate);
    }

    removeOfficialCar(car:OfficialCar):void{
        let targetCarIndex = this.#officialCars.indexOf(car.plate);
        this.#officialCars.splice(targetCarIndex,1);
    }

    addResidentCar(car:ResidentCar):void{
        this.#residentCars.push(car.plate);
    }

    removeResidentCar(car:ResidentCar):void{
        let targetCarIndex = this.#residentCars.indexOf(car.plate);
        this.#residentCars.splice(targetCarIndex,1);
    }
}