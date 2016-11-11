import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import { UPLOAD_DIRECTIVES } from 'ng2-uploader';

import {AppComponent} from "./app.component";
import {CacheComponent} from "./cache/cache.component";
import {FileDropComponent} from "./cache/files/file-drop.component";
import {FileListComponent} from "./cache/files/file-list.component";
import {HttpModule} from "@angular/http";
import {FileComponent} from "./cache/files/file.component";


@NgModule({
    declarations: [
        AppComponent,
        CacheComponent,
        FileDropComponent,
        FileListComponent,
        FileComponent,
        UPLOAD_DIRECTIVES
        ],
    imports: [BrowserModule, HttpModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}