import { ILogPark } from "./ILogPark.js";
import { Park } from "./Park.js";
import { ParkLogEntry } from "./ParkLogEntry.js";

export class ResidentPark implements ILogPark{
    logParkingCheckin(newLogEntry:ParkLogEntry,park:Park):void{
        park.addParkingLogEntry(newLogEntry);
    }

}