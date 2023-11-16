import { Injectable } from '@nestjs/common';

@Injectable()
export class DocumentService {
    /**
     * @param key Key for the file to save in s3
     * @param buffer Buffer to save
     */
    upload(key: string, buffer: Buffer): void {
        // Logic to upload the document to S3 or other storage
        console.log(`Uploading document with ID ${key}`);
        console.log(`Buffer is ${buffer.toString()}`);
    }

    /**
     * @param key Key for the File to download
     */
    download(key: string): void {
        // Logic to download the document from S3 or other storage
        console.log(`Downloading document with ID ${key}`);
    }

    /**
     * @param key Key for the file to delete
     */
    delete(id: string): void {
        // Logic to delete the document from S3 or other storage
        console.log(`Deleting document with ID ${id}`);
    }
}
