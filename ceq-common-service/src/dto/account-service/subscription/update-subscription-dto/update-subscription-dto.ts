import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { SubscriptionModel } from 'src/models';
import { CustomerDto } from '../customer-dto/cutomer-dto';
import { CustomerUserDto } from '../customer-user-dto/customer-user-dto';

export class UpdateSubscriptionDto {
    @IsString()
    @IsNotEmpty()
    tenantId?: string;

    @IsString()
    @IsNotEmpty()
    tenantCode?: string;
    /**
     * Customer id for the subscription
     */
    @IsNotEmpty()
    customer?: CustomerDto;

    /**
     * List of users associated with this subscription
     */
    @IsArray()
    @IsNotEmpty()
    users?: CustomerUserDto[];

  @IsOptional()
  @IsString()
  type?: string;

  /**
     * Start date of subscription
     */
  @IsOptional()
  @IsString()
  startDate?: string;


  @IsOptional()
  @IsString()
  expiryDate?: string;
 
  @IsOptional()
  @IsString()
  createdAt?: string;


  @IsNumber()
  @IsNotEmpty()
  expiryTime?: number;
}
export interface UpdateSubscriptionDtoRes {
    /** Subscription instance json */
            status: number,
            message:string,
            customer_id?:string, 
            data?: SubscriptionModel
}