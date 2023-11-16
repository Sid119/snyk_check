import {
    IsArray,
    IsInt,
    IsNotEmpty,
    IsObject,
    ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateTemplateDto } from '../create-template/create-template-dto';

class Contract {
    @IsInt()
    @IsNotEmpty()
    contractId: number;

    @IsNotEmpty()
    contractName: string;

    @IsNotEmpty()
    contractDesc: string;
}

export class FavouriteDTO {
    @IsInt()
    @IsNotEmpty()
    userId: number;

    @ValidateNested({ each: true })
    @Type(() => CreateTemplateDto)
    templateFav: CreateTemplateDto[];

    @ValidateNested({ each: true })
    @Type(() => Contract)
    contractFav: Contract[];
}
