import { Component } from '@angular/core';
import {FileService} from "./cache/files/file.services";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [FileService]
})

export class AppComponent{


}