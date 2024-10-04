import { OfficialCar } from "./OfficialCar.js";
import { OfficialPark } from "./OfficialPark.js";
import { Park } from "./Park.js";
import { ParkLogEntry } from "./ParkLogEntry.js";
import { RegularCar } from "./RegularCar.js";
import { RegularPark } from "./RegularPark.js";
import { ResidentCar } from "./ResidentCar.js";
import ExcelJS from '../node_modules/exceljs/index.js';

const parking = new Park();

document.querySelector("#newLogIn")!.addEventListener("click", ()=>{
    const promptResponse:string|null = prompt("Matricula del coche entrante:");
    const plate:string = promptResponse?promptResponse:"";
    let newLogIn = new ParkLogEntry(plate);
    parking.addParkingLogEntry(newLogIn);
    console.log(parking);
} )


document.querySelector("#newCheckOut")!.addEventListener("click", async () => {
    const promptResponse: string | null = prompt("Matricula del coche saliente:");
    const plate: string = promptResponse ? promptResponse : "";
    let newCheckOut = new ParkLogEntry(plate);
    newCheckOut.checkOutDate = Date.now();

    // Crear workbook y worksheet
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Log Parking');

    // Añadir encabezado si es la primera entrada
    worksheet.columns = [
        { header: 'Plate', key: 'plate', width: 20 },
        { header: 'Check in', key: 'checkInDate', width: 30 },
        { header: 'Check out', key: 'checkOutDate', width: 30 }
    ];

    // Añadir datos de la entrada del parqueo
    const [plateDetail, checkInDetail, checkOutDetail] = newCheckOut.print().split(/\s+/);
    
    worksheet.addRow({
        plate: plateDetail,
        checkInDate: checkInDetail,
        checkOutDate: checkOutDetail
    });

    console.log(newCheckOut.print());


    // Guardar el archivo
    await workbook.xlsx.writeFile('registro_parqueo.xlsx');
    console.log("Registro guardado");
})

document.querySelector("#newOfficialCarEntry")!.addEventListener("click", ()=>{
    const promptResponse:string|null = prompt("Dame la matrícula del coche que quieres crear");
    const plate:string = promptResponse?promptResponse:"";
    let newOfficialCar = new OfficialCar(plate);
    parking.addOfficialCar(newOfficialCar);
    console.log(parking);
} )

document.querySelector("#newResidentCarEntry")!.addEventListener("click", ()=>{
    const promptResponse:string|null = prompt("Dame la matrícula del coche que quieres crear");
    const plate:string = promptResponse?promptResponse:"";
    let newResidentCar = new ResidentCar(plate);
    parking.addResidentCar(newResidentCar);
    console.log(parking);
} )


/*const parking = new Park();
const car1 = new RegularCar("7929-KVD");
const car2 = new OfficialCar("3344-ZDB");
parking.addOfficialCar(car2);
const parkLogEntry1 = new ParkLogEntry(car1.plate);
const parkLogEntry2 = new ParkLogEntry(car2.plate);
const regularPark1 = new RegularPark();
regularPark1.logParkingCheckin(parkLogEntry1, parking);
const OfficialPark1 = new OfficialPark();
OfficialPark1.logParkingCheckin(parkLogEntry2, parking);
parkLogEntry2.checkOutDate = Date.now();
console.log(parkLogEntry1.print());
console.log(parkLogEntry2.print());
console.log(parking);*/
