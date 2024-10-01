import { Car } from "./Car";

export interface IPayment {
    calculateTotalAmount(car:Car):number;
    pay(car:Car):void;
}