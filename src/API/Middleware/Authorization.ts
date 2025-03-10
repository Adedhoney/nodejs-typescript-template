import { CustomError } from '@application/error';
import { StatusCode } from '@application/utilities';
import { Permission } from '@domain/Models';
import { NextFunction, Request, Response } from 'express';

export const Authorization =
    (permission: string) =>
    async (req: Request, res: Response, next: NextFunction) => {
        const adminPermissions = res.locals.adminPermissions as Permission[];
        const access = adminPermissions.findIndex((x) => x.name === permission);
        console.log(permission);

        if (access === -1) {
            return next(
                new CustomError('Unauthorized access', StatusCode.UNAUTHORIZED),
            );
        }

        next();
    };
