import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CustomerDto {
    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    status: string;
}