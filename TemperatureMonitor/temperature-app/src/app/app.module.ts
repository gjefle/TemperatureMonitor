
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { UnitConvertPipe } from './temperature/unit-convert.pipe';
//import * as highcharts from 'highcharts';
declare var require: any;
export function highchartsFactory() {
    return require('highcharts');
}
@NgModule({
    declarations: [
        AppComponent,
        TemperatureComponent,
        UnitConvertPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ChartModule
    ],
    providers: [DatePipe,
        {
            provide: HighchartsStatic,
            useFactory: highchartsFactory
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
