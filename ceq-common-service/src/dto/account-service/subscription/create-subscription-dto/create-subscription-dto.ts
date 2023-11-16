import { Transform, Type } from 'class-transformer';
import { IsArray, IsDate, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { SubscriptionModel } from 'src/models';
import { CustomerUserDto } from '../customer-user-dto/customer-user-dto';
import { CustomerDto } from '../customer-dto/cutomer-dto';
import { log } from 'console';

/**
 * Request DTO for Creating Subscription Api
 * @public
 */
export class CreateSubscriptionDto {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    tenantId: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    tenantCode: string;
    /**
     * Customer id for the subscription
     */
    @IsNotEmpty()
    customer: CustomerDto;

    /**
     * List of users associated with this subscription
     */
    @IsArray()
    @IsNotEmpty()
    users: CustomerUserDto[];

    /**
     * Type of subscription
     */
    @IsString()
    @IsNotEmpty()
    type: string;

    /**
     * Start date of subscription
     */
    
   
    @IsOptional()
    @IsString()
    startDate: string;

  
    @IsOptional()
    @IsString()
    expiryDate: string;
   
    @IsOptional()
    @IsString()
    createdAt: string;


    @IsNumber()
    @IsNotEmpty()
    expiryTime: number;
}

/**
 * Response DTO for Creating Subscription Api
 * @public
 */
export interface CreateSubscriptionDtoRes {
    /** Subscription instance json */
            status: number,
            message:string,
            customer_id?:string, 
            data?: SubscriptionModel
}
