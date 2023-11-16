import { IsString, IsNumber } from 'class-validator';

export class DeleteAccessDto {
    @IsNumber()
    id: number;

    @IsString()
    email: string;
}

// export interface DeleteAccessDtooRes {
//     message: string;
// }
