import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Logger } from '../../app/domain/models/logger';
import { Temperature } from '../../app/domain/models/temperature';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { Observable } from 'rxjs/observable';

@Injectable()
export class DataContextService {
    constructor(private http: Http) {

    }
    
    getLoggers(): Promise<Logger[]> {
        const url = '/api/logger';
        return this.http.get(url)
            .toPromise()
            // Call map on the response observable to get the parsed people object
            .then(res => res.json() as Logger[])
            .catch(this.handleError);
        // Subscribe to the observable to get the parsed people object and attach it to the
        // component
        //.subscribe(loggers => {
        //    return <Logger[]>loggers;
        //});
    }
    getTemperatures(loggerId, unitEnum): Promise<Temperature[]> {
        const url = '/api/temperature/temperatureData/' + loggerId + "/" + unitEnum;
        return this.http.get(url)
            .toPromise()
            // Call map on the response observable to get the parsed people object
            .then(res => res.json() as Temperature[])
            .catch(this.handleError);
    }
    updateCollectInterval() {
        return IntervalObservable.create(2000);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
