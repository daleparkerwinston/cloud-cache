import {Component, OnInit} from "@angular/core";
import {File} from "./file.model";
import {FileService} from "./file.services";

@Component({
    selector: 'file-list',
    templateUrl: './file-list.component.html'
})
export class FileListComponent implements OnInit {
    files: File[];

    constructor(private fileService: FileService) {}


    // TODO: bind the file list so that it updates when I add a new file
    ngOnInit() {
        this.fileService.getFiles()
            .subscribe(
                (files: File[]) => {
                    this.files = files;
                }
            )
    }
}