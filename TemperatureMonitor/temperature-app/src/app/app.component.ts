import { Component } from '@angular/core';
import { DataContextService } from '../app/data/data-context.service';
import { Logger } from '../app/domain/models/logger';
import { DataListenerService } from '../app/data/data-listener.service';
import { Temperature } from '../app/domain/models/temperature';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataContextService, DataListenerService]
})
export class AppComponent {
    title = 'Temperature overview';
    loggers: Logger[];
    selectedLogger: Logger;
    temperatures: Temperature[];
    
    constructor(private ctx: DataContextService, private socket: DataListenerService, private http: Http) {
        
    }
    ngOnInit() {
        this.ctx.getLoggers().then(loggers => {
            this.loggers = loggers;
            this.selectedLogger = loggers[0];
        });
        //this.socket.start();
    }
    selectLogger(logger: Logger) {
        this.selectedLogger = logger;
        //this.ctx.updateCollectInterval().subscribe(() => {
        //    this.ctx.getTemperatures(this.selectedLogger.loggerId, this.selectedUnit).then(temperatures => {
        //        this.temperatures = temperatures;
        //    });
        //});
        //    .subscribe(temperatures => {
        //    this.temperatures.concat(temperatures);
        //});
    }
 
}
