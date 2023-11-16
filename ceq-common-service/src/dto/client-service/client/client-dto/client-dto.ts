import {IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString} from 'class-validator';

export class ClientDto {
    
    @IsNotEmpty()
    @IsString()
    registrationId: string;

    @IsNotEmpty()
    @IsString()
    entityName: string;

    @IsNotEmpty()
    @IsString()
    entityLegalName: string;

    @IsNotEmpty()
    @IsString()
    entityAddress: string;

    @IsNotEmpty()
    @IsString()
    stateOfIncorporation: string;

    @IsNotEmpty()
    @IsString()
    countryOfIncorporation: string;

    @IsNotEmpty()
    @IsString()
    entityType: string;//person, contractor, company

    @IsOptional()
    @IsPhoneNumber()
    entityPhoneNumber?: string;

    @IsOptional()
    @IsEmail()
    entityEmail?: string;

    @IsOptional()
    @IsString()
    pocPersonName?: string;

    @IsOptional()
    @IsEmail()
    pocPersonEmail?: string;

    @IsOptional()
    @IsPhoneNumber()
    pocPersonPhoneNumber?: string;
}
