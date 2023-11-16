import { Document } from './document.interface';

/**
 * This is model class responsible for instantiating CustomerUserModel.
 *
 * @public
 */
export class DocumentModel implements Document {
    private _id: string;
    private _s3key: string;
    private _type: string;

    /**
     * @constructor
     * @param document Values for document
     */
    constructor(document: Document) {
        this._id = document.id;
        this._s3key = document.s3key;
        this._type = document.type;
    }

    /**
     * Get id for the Document
     */
    get id(): string {
        return this._id;
    }

    /**
     * Set id for the Document
     */
    set id(value: string) {
        this._id = value;
    }

    /**
     * Get S3 Key for the Document
     */
    get s3key(): string {
        return this._s3key;
    }

    /**
     * Get S3 key for the Document
     */
    set s3key(value: string) {
        this._s3key = value;
    }

    /**
     * Get type for the Document
     */
    get type(): string {
        return this._type;
    }

    /**
     * Set id for the Document
     */
    set type(value: string) {
        this._type = value;
    }
}
