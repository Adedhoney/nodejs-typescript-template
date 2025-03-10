import config from '@application/config';
import {
    DeleteObjectCommand,
    S3Client,
    PutObjectCommand,
    GetObjectCommand,
} from '@aws-sdk/client-s3';

export interface IFileStorage {
    getConnection(): S3Client;
    deleteKey(Key: string): Promise<void>;
    getSignedUrl(type: SignedURLType, filename: string): Promise<string>;
}

export enum SignedURLType {
    UPLOAD = 0,
    GET = 1,
}

export class FIleStorage implements IFileStorage {
    private s3: S3Client;

    constructor() {
        this.s3 = this.connect();
    }

    private connect() {
        const s3 = new S3Client({
            endpoint: config.S3.endpoint,
            region: config.S3.region,
            credentials: {
                accessKeyId: config.S3.accessKey,
                secretAccessKey: config.S3.secretKey,
            },
        });
        return s3;
    }

    getConnection(): S3Client {
        return this.s3;
    }

    async deleteKey(Key: string): Promise<void> {
        const command = new DeleteObjectCommand({
            Bucket: config.S3.bucket,
            Key,
        });
        await this.s3.send(command);
    }

    public async getSignedUrl(
        type: SignedURLType,
        filename: string,
    ): Promise<string> {
        let command: PutObjectCommand | GetObjectCommand | null = null;
        if (type === SignedURLType.UPLOAD) {
            command = new PutObjectCommand({
                Bucket: config.S3.bucket,
                Key: filename,
            });
        } else if (type === SignedURLType.GET) {
            command = new GetObjectCommand({
                Bucket: config.S3.bucket,
                Key: filename,
            });
        } else {
            throw new CustomError('Type must be 0 or 1');
        }
        const url = await getSignedUrl(this.s3, command, {});
        return url;
    }
}
