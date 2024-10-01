import { Car } from "./Car";

interface ILogPark{
    logParkingCheckin(car:Car,park:Park):void;
    logParkingCheckout(car:Car, park:Park):void;
}