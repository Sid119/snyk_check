import { IsString, IsNumber, IsEmpty } from 'class-validator';

export class UpdateCategoryDto {
    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsEmpty()
    parentCategory: null;
}

export interface UpdateCategoryDtoRes {
    status: number;
    message: string;
}
