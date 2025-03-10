// import { GetUploadURLResponse } from '@api/DTO';
// import {
//     generateRandomId,
//     getCurrentTimeStamp,
//     getModifier,
//     getS3FileName,
// } from '@application/utilities';
// import { FileStatus, User } from '@domain/Models';
// import { IFileRepository } from '@domain/Repositories';
// import { IFileStorage, SignedURLType } from '@infrastructure/FileStorage';

// export interface IFileService {
//     GetUploadSignedUrl(
//         auth: User,
//         fileName: string,
//     ): Promise<GetUploadURLResponse>;

//     GetDownloadSignedUrl(
//         auth: User,
//         fileId: string,
//     ): Promise<GetUploadURLResponse>;
// }

// export class FileService implements IFileService {
//     constructor(
//         private fileUpload: IFileStorage,
//         private filerepo: IFileRepository,
//     ) {}

//     public async GetUploadSignedUrl(
//         auth: User,
//         fileName: string,
//     ): Promise<GetUploadURLResponse> {
//         const date = getCurrentTimeStamp();
//         const s3FileName = getS3FileName(auth.userId, fileName, date);
//         const fileId = generateRandomId();

//         const modifier = getModifier('user', auth.userId);

//         const file = {
//             fileId,
//             userId: auth.userId,
//             originalName: fileName,
//             s3FileName,
//             s3Status: FileStatus.UPLOAD_REQUEST,
//             createdOn: date,
//             lastModifiedOn: date,
//             createdBy: modifier,
//             modifiedBy: modifier,
//         };

//         const signedUrl = await this.fileUpload.getSignedUrl(
//             SignedURLType.UPLOAD,
//             s3FileName,
//         );

//         await this.filerepo.saveFile(file);
//         return { signedUrl, file };
//     }

//     public async GetDownloadSignedUrl(
//         auth: User,
//         fileId: string,
//     ): Promise<GetUploadURLResponse> {
//         const file = await this.filerepo.getFile(fileId);

//         const signedUrl = await this.fileUpload.getSignedUrl(
//             SignedURLType.GET,
//             file.s3FileName,
//         );

//         return { signedUrl, file };
//     }
// }
