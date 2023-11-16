import {
    PipeTransform,
    Injectable,
    ArgumentMetadata,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

/**
 * @public
 */
@Injectable()
export class ValidationPipe implements PipeTransform {
    /**
     * @param value Any value to validate
     * @param metadata Metadata provided from nest
     * @returns The value as it is, if valid
     * @throws HttpException if the value is invalid according to the validator class
     */
    async transform(
        value: any,
        { metatype }: ArgumentMetadata,
    ): Promise<boolean> {
        // If metatype is not available or any Validator class is not provided then return value as is
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }
        // Convert convert the value provided to Validator class instance
        const object = plainToInstance(metatype, value);

        // Validate the object based on Validator class
        const errors = await validate(object);

        // If there are validation errors throw constraints
        // TODO: Update error message to make it more explainable
        if (errors.length > 0) {
            throw new HttpException(
                { message: 'ValidationError' },
                HttpStatus.BAD_REQUEST,
            );
        }

        return value;
    }

    /**
     * @param metatype Any primitive data type
     * @returns boolean
     */
    private toValidate(metatype: any): boolean {
        const types = [String, Boolean, Number, Array, Object];
        return !types.includes(metatype);
    }
}
