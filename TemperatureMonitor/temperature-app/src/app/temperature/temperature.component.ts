
import { Component, OnInit } from '@angular/core';
//import { TemperatureUnit } from "app/domain/enums/temperature-units";
import { DataListenerService } from "app/data/data-listener.service";
import { TemperatureUnits } from "app/domain/enums/temperature-units";
import {Temperature } from "app/domain/models/temperature";
import {Logger} from "app/domain/models/logger";
//import { Temp}

@Component({
    selector: 'app-temperature',
    templateUrl: './temperature.component.html',
    styleUrls: ['./temperature.component.css'],
    providers: [DataListenerService]
})
export class TemperatureComponent implements OnInit {
    selectedUnit = TemperatureUnits.Celsius;
    units = TemperatureUnits;
    temperature: Temperature;
    constructor(private dataListener: DataListenerService) {
        this.temperature = new Temperature();
        this.temperature.value = 0;
    }
    
    ngOnInit() {
        //this.dataListener.start();
    }
    get unitShort() {
        switch (Number(this.selectedUnit)) {
            case TemperatureUnits.Celsius:
                return "\u00B0C";
            case TemperatureUnits.Kelvin:
                return "K";
            case TemperatureUnits.Fahrenheit:
                return "\u00B0F";
        }
    }
}



