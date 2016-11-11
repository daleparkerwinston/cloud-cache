export class File {
    fileId: string;
    originalName: string;
    encoding: string;
    mimeType: string;
    destination: string;
    fileName: string;
    path: string;
    size: number;
    dateAdded: string;
    updated: string;
    username: string;
    userId: string;

    constructor(
        fileId: string,
        originalName: string,
        encoding: string,
        mimeType: string,
        destination: string,
        fileName: string,
        path: string,
        size: number,
        dateAdded: string,
        updated: string,
        username?: string,
        userId?: string
    )
    {
        this.fileId = fileId;
        this.originalName = originalName;
        this.encoding = encoding;
        this.mimeType = mimeType;
        this.destination = destination;
        this.fileName = fileName;
        this.path = path;
        this.size = size;
        this.dateAdded = dateAdded;
        this.updated = updated;
        this.username = username;
        this.userId = userId;
    }
}