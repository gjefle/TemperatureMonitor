import {Logger} from "./logger";
export class Temperature {
    constructor(value: number, date: Date) {
        this.value = value;
        this.logDate = date;
    }
    //temperatureId: number;
    logDate: Date;
    value: number;
    //loggerId: number;
    //logger: Logger;
}   
