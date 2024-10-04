import { Car } from "./Car.js";
import { Park } from "./Park.js";
import { ParkLogEntry } from "./ParkLogEntry.js";

export interface ILogParkCheckin{
    logParkingCheckin(newEntry:ParkLogEntry,park:Park):void;
}