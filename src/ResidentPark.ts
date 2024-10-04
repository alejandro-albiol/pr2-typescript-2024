import { ILogParkCheckin } from "./ILogParkCheckin.js";
import { Park } from "./Park.js";
import { ParkLogEntry } from "./ParkLogEntry.js";

export class ResidentPark implements ILogParkCheckin{
    logParkingCheckin(newLogEntry:ParkLogEntry,park:Park):void{
        park.addParkingLogEntry(newLogEntry);
    }

}