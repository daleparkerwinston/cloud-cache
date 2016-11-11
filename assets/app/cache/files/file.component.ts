import {File} from "./file.model"
import {Component, Input, Injectable} from "@angular/core";
import {FileService} from "./file.services";
import {
    Http, Response, RequestOptions,
    ResponseContentType
} from "@angular/http";
import 'rxjs/Rx' ;

@Component({
    selector: 'file',
    templateUrl: './file.component.html'
})

@Injectable()

export class FileComponent {
    @Input() file: File;

    constructor(private fileService: FileService, private http: Http) {}


    getFileData(file: File) {
        let options = new RequestOptions({responseType: ResponseContentType.Blob});
        return this.http.get('http://dalewinston.com/file/' + this.file.fileId, options)
            .subscribe((response) => {
                console.log(response.statusText);
                let blob: Blob = response.blob();
                var filename = this.file.originalName;
                saveAs(blob, filename);
            });
    }
}