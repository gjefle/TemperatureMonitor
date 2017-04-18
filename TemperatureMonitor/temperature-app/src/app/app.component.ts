import { Component } from '@angular/core';
import { DataContextService } from 'app/data/data-context.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataContextService]
})
export class AppComponent {
    title = 'Temperature overview';
    constructor(ctx: DataContextService) {
        ctx.getLoggers();
    }
}
