import { IsString, IsNumber, IsOptional } from 'class-validator';
import { TemplateCategoryModel } from 'src/models';

export class CreateCategoryDto {
    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsOptional()
    parentCategory: TemplateCategoryModel | null;
}

export interface CreateCategoryDtoRes {
    status: number;
    message: string;
}
