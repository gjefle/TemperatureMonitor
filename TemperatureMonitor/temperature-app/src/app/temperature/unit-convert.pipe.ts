import { Pipe, PipeTransform } from '@angular/core';
import { TemperatureUnits } from "app/domain/enums/temperature-units";

@Pipe({
    name: 'unitConvert',
    pure: false
})
export class UnitConvertPipe implements PipeTransform {
    transform(value: any, unit: TemperatureUnits): any {
        switch (Number(unit)) {
            case TemperatureUnits.Celsius:
                return value;
            case TemperatureUnits.Kelvin:
                return value + 274.15;
            case TemperatureUnits.Fahrenheit:
                return value * 1.8 + 32;
            default:
                return value;
        }
    }
}

