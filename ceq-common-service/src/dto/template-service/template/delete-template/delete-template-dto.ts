import { IsNumber } from 'class-validator';

export class DeleteTemplateDto {
    @IsNumber()
    id: number;
}

export interface DeleteTemplateDtoRes {
    status: number;
    message: string;
}
