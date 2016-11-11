import {File} from './file.model';
import {Injectable} from "@angular/core";

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import {Http, Response} from "@angular/http";

@Injectable()

export class FileService {
    private files: File[] = [];

    constructor(private http: Http) {}

    getFiles() {
        // TODO: Change this to global config file like in messages tutorial
        return this.http.get('http://localhost:3000/file')
            .map((response: Response) => {
                const files = response.json().obj;
                let transformedFiles: File[] = [];
                for (let file of files) {
                    transformedFiles.push(new File(
                        file._id,
                        file.originalName,
                        file.encoding,
                        file.mimeType,
                        file.destination,
                        file.fileName,
                        file.path,
                        file.size,
                        file.dateAdded,
                        file.updated,
                    ));
                }
                this.files = transformedFiles;
                return transformedFiles;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

}