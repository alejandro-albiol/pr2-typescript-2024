import { Car } from "./Car.js";
import { Park } from "./Park.js";

interface ILogPark{
    logParkingCheckin(car:Car,park:Park):void;
    logParkingCheckout(car:Car, park:Park):void;
}