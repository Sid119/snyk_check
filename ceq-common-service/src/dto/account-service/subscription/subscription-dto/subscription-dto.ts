import { Transform } from 'class-transformer';
import { IsArray, IsDateString, IsOptional, IsString } from 'class-validator';
import { SubscriptionModel } from 'src/models';

export class SubscriptionDto {
  @IsOptional()
  @IsString()
  customerId?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  users?: string[];

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      // Ensure the date string ends with ".000Z" for milliseconds
      const isoDateString = value.endsWith('Z') ? value : `${value}.000Z`;
      return isoDateString;
    }
  })
  startDate?: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      // Ensure the date string ends with ".000Z" for milliseconds
      const isoDateString = value.endsWith('Z') ? value : `${value}.000Z`;
      return isoDateString;
    }
  })
  expiryDate?: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      // Ensure the date string ends with ".000Z" for milliseconds
      const isoDateString = value.endsWith('Z') ? value : `${value}.000Z`;
      return isoDateString;
    }
  })
  createdAt?: string;
}
export interface SubscriptionDtoRes {
    /** Subscription instance json */
            status: number,
            message:string,
            customer_id?:string, 
            data?: SubscriptionModel
}