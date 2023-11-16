import { IsOptional, IsNumber } from 'class-validator';

export class getTemplateDto {
    @IsNumber()
    @IsOptional()
    id?: number;
}

export interface getTemplateDtoRes {
    status: number;
    data: object;
}
