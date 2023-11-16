import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CustomerUserModel } from 'src/models';

export class CustomerUserDto {
    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    emailId: string;

    @IsArray()
    @IsString({ each: true })
    @IsNotEmpty({ each: true })
    roles: string[];

    @IsArray()
    @IsString({ each: true })
    @IsNotEmpty({ each: true })
    privilege: string[];
}



export interface CustomerDtoRes {
    /** Subscription instance json */
            status: number,
            message:string,
            customer_id?:string, 
            data?: CustomerUserModel
}

enum UserRole {
    Admin = 'Admin',
    ContractAdmin = 'ContractAdmin',
    TemplateAdmin = 'TemplateAdmin',
}

enum UserPrivilege {
    ContractRead = 'ContractRead',
    ContractWrite = 'ContractWrite',
    TemplateRead = 'TemplateRead',
    TemplateWrite = 'TemplateWrite',
}