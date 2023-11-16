import { IsNotEmpty, IsString } from 'class-validator';

export class GetOwnerDto {
    @IsNotEmpty()
    @IsString()
    customerId: string;

    @IsNotEmpty()
    @IsString()
    role: string;
}
