import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class DataContextService {
    people: any;
    constructor(private http: Http) {
       
    }
    getLoggers() {
        this.http.get('http://localhost:55054/api/logger')
            // Call map on the response observable to get the parsed people object
            .map(res => res.json())
            // Subscribe to the observable to get the parsed people object and attach it to the
            // component
            .subscribe(people => this.people = people);
    }

}
