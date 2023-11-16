import { IsOptional, IsNumber } from 'class-validator';

export class getCategoryDto {
    @IsNumber()
    @IsOptional()
    id?: number;
}

export interface getCategoryDtoRes {
    status: number;
    data: object;
}
