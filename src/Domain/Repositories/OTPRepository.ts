import { IDatabase } from '@infrastructure/Database';
import { OTP, OTPStatus } from '../Models';

export interface IOTPRepository {
    saveOTP(otp: OTP): Promise<void>;
    getOTP(email: string, otp: string): Promise<OTP>;
    useOTP(email: string, otp: string, date: number): Promise<void>;
    addWrongTrial(email: string, number: number, date: number): Promise<void>;
}
