
import { Component, OnInit, Input } from '@angular/core';
//import { TemperatureUnit } from "app/domain/enums/temperature-units";
import { TemperatureUnits } from '../../app/domain/enums/temperature-units';
import { Temperature } from '../../app/domain/models/temperature';
import { Logger } from '../../app/domain/models/logger';
import { DataContextService } from '../../app/data/data-context.service';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { DatePipe } from '@angular/common';
//import { Temp}
//declare var require: any;
//var Highcharts = require('highcharts/highcharts');
//var HighchartsMore = require('highcharts/highcharts-more');
//HighchartsMore(Highcharts);

@Component({
    selector: 'app-temperature',
    templateUrl: './temperature.component.html',
    styleUrls: ['./temperature.component.css']
    //providers: [DataListenerService]
})
export class TemperatureComponent implements OnInit {
    @Input() logger: Logger;
    interval: any;
    temperatures: Temperature[];
    selectedUnit = TemperatureUnits.Celsius;
    units = TemperatureUnits;
    temperature: Temperature;

    // Highcharts objects
    options;
    chart;

    constructor(private ctx: DataContextService, private datePipe: DatePipe) {
    }

    ngOnInit() {

        this.setOptions();
        //this.interval = IntervalObservable.create(2000).subscribe(this.getTemperatures);
        this.getTemperatures();
    }
    ngOnDestroy() {
        //this.interval.unsubscribe(this.getTemperatures);
    }

    getTemperatures = () => {
        this.ctx.getTemperatures(this.logger.loggerId, this.selectedUnit).then(temperatures => {
            this.temperatures = temperatures;
            this.updateOptions(temperatures);
        });

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
    updateOptions = (temperatures: Temperature[]) => {
        this.options.title = "Temperature " + this.unitShort;
        var data = [];
        //this.chart.redraw = false;
        temperatures.forEach(t => {
            var d1 = new Date(t.logDate).toUTCString();
            var date = this.datePipe.transform(t.logDate, 'mediumTime');
            data.push([d1, t.value]);
            
        });
        this.chart.series[0].setData(data, true);
    }
    reloadData() {
        this.getTemperatures();
    }
    setOptions() {
        this.options = {
            xAxis: {
                type: 'datetime',
                //dateTimeLabelFormats: { // don't display the dummy year
                //    day: '%e. %b',
                //    month: '%e. %b',
                //    year: '%b'
                //},
                title: {
                    text: 'Date'
                }
            },
            yAxis: {
                title: {
                    text: "Temperature " + this.unitShort
                },
                min: 0
            },
            title: { text: "" },
            series: [{
                name: this.logger.name,
                data: []
            }]
        };
    }
    saveInstance(chartInstance) {
        this.chart = chartInstance;
    }

}



