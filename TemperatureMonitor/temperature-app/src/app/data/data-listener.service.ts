import { Injectable } from '@angular/core';
//import { TemperatureData } from "app/domain/models/temperatureData";

@Injectable()
export class DataListenerService {
    socket: WebSocket;
    constructor() { }
    start() {
        this.socket = new WebSocket("ws://localhost:5000/temperature");
        this.socket.onopen = this.onOpen;
        this.socket.onmessage = this.onMessage;
    }
    onOpen = (evt: Event) => {
        console.log("Socket opened");
        this.socket.send("Hei");
    }

    onMessage = (msg: MessageEvent) => {
        console.log(msg);
    }

    subscribe() {

    }
    unsubscribe() {

    }
    private connect() {

    }

}
