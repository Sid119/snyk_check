export type DocumentServerConfig = {
    url: string;
};

export type StorageConfig = {
    credentials: {
        accessKeyId: string;
        secretAccessKey: string;
    };
    bucketName: string;
    region: string;
    endpoint?: string;
    forcePathStyle: boolean;
};

export type DynamoDBConfig = {
    credentials: {
        accessKeyId: string;
        secretAccessKey: string;
    };
    region: string;
    endpoint?: string;
    forcePathStyle: boolean;
};

export type Config = {
    documentServer: DocumentServerConfig;
    dynamodb: DynamoDBConfig;
    storage: StorageConfig;
};

export const appConfig = (): Config => {
    return {
        documentServer: {
            url: process.env.EDITOR_SERVER_HOST,
        },
        dynamodb: {
            credentials: {
                accessKeyId: process.env.AWS_DB_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_DB_SECRET_ACCESS_KEY,
            },
            region: process.env.AWS_DB_REGION,
            endpoint: process.env.AWS_DB_ENDPOINT,
            forcePathStyle: true,
        },
        storage: {
            credentials: {
                accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
            },
            bucketName: process.env.AWS_S3_BUCKET_NAME,
            region: process.env.AWS_S3_REGION,
            endpoint: process.env.AWS_S3_ENDPOINT,
            forcePathStyle: true,
        },
    };
};
