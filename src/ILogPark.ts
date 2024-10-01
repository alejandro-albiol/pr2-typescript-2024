import { Car } from "./Car.js";
import { Park } from "./Park.js";
import { ParkLogEntry } from "./ParkLogEntry.js";

export interface ILogPark{
    logParkingCheckin(newEntry:ParkLogEntry,park:Park):void;
    //logParkingCheckout(car:Car, park:Park):void;
}