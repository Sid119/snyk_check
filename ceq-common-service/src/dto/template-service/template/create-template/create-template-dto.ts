import { IsString, IsArray } from 'class-validator';
import { Approval } from '../../../../models/approval/approval.interface';

export class CreateTemplateDto {
    @IsString()
    title: string;

    @IsString()
    ownerId: string;

    @IsString()
    description: string;

    @IsString()
    ownerName: string;

    @IsString()
    ownerAccess: string;

    @IsString()
    categoryName: string;

    @IsString()
    subCategoryName: string;

    @IsString()
    status: string;

    @IsString()
    approvalType: string;

    @IsArray()
    approvalList: Approval[];

    @IsArray()
    accessList: string[];

    @IsString()
    editableDocId: string;
}

export interface CreateTemplateDtoRes {
    status: number;
    message: string;
}
