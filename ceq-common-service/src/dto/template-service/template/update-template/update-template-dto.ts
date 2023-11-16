import { IsString, IsNumber, IsArray, ValidateNested } from 'class-validator';
import { Approval } from 'src/models/approval/approval.interface';
import { PlaceholderContent } from '../placeholder/placeholder-dto';

export class UpdateTemplateDto {
    @IsNumber()
    id: number;

    @IsString()
    title: string;

    @IsString()
    ownerId: string;

    @IsString()
    description: string;

    @IsString()
    ownerAccess: string;

    @IsString()
    status: string;

    @IsString()
    ownerName: string;

    @IsString()
    categoryName: string;

    @IsString()
    subCategoryName: string;

    @IsString()
    approvalType: string;

    @IsArray()
    approvalList: Approval[];

    @IsArray()
    accessList: string[];

    @IsString()
    editableDocId: string;

    @ValidateNested()
    placeholder: PlaceholderContent;
}

export interface UpdateTemplateDtoRes {
    status: number;
    message: string;
}
