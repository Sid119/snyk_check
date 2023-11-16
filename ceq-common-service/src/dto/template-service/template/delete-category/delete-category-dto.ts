import { IsNumber } from 'class-validator';

export class DeleteCategoryDto {
    @IsNumber()
    id: number;
}

export interface DeleteCategoryDtoRes {
    status: number;
    message: string;
}
