import {Component, OnInit, NgZone} from "@angular/core";

const URL = 'http://localhost:3000/file';

@Component({
    selector: 'file-drop',
    templateUrl: './file-drop.component.html',
    styleUrls: ['./file-drop.component.css']
})
export class FileDropComponent implements OnInit {
    private zone: NgZone;
    private options: Object;
    private progress: number = 0;
    private response: any= {};

    public hasBaseDropZoneOver: boolean = false;

    public fileOverBase(e:any): void {
        this.hasBaseDropZoneOver = e;
    }

    ngOnInit() {
        this.zone = new NgZone({ enableLongStackTrace: false });
        this.options = {
            url: URL,
            calculateSpeed: true
        };
    }

    // TODO: Need to change to allow progress for multiple files
    // Right now it resets progress after each file if more that one file
    // is dropped onto the drop zone
    public handleUpload(data: any): void {
        this.zone.run(() => {
            this.hasBaseDropZoneOver = false;
            this.response = data;
            this.progress = Math.floor(data.progress.percent);
            if (this.progress == 100 ) {
                this.progress = 0;
            }
        })
    }
}