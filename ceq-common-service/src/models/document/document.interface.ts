/**
 * This interface is for CustomerUser objects.
 * @public
 */
export interface Document {
    /** Id of document */
    id: string;

    /** S3 key of document */
    s3key: string;

    /** Type of document */
    type: string;
}
