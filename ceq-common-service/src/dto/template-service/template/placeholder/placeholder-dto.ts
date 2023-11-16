import { Type } from 'class-transformer';
import {
    IsEnum,
    IsOptional,
    IsString,
    MinLength,
    ValidateNested,
} from 'class-validator';

export enum QuestionType {
    TEXT = 'text',
    DATE = 'date',
    MULTIPLE_CHOICE = 'multiple-choice',
    PREDEFINED = 'predefined',
    DROPDOWN = 'dropdown',
}

export class PlaceholderContent {
    @ValidateNested()
    @Type(() => PlaceholderQuestion)
    questions: PlaceholderQuestion[];

    @ValidateNested()
    @Type(() => PlaceholderSelection)
    selections: PlaceholderSelection[];
}

export class PlaceholderQuestion {
    @IsString({})
    @MinLength(3)
    text: string;

    @IsString({})
    key: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsEnum(QuestionType)
    type: QuestionType;

    @ValidateNested()
    @IsOptional()
    @Type(() => QuestionOption)
    options?: QuestionOption[];
}

export class PlaceholderSelection {
    @IsString({})
    @MinLength(3)
    text: string;

    @IsString()
    key: string;
}

export class QuestionOption {
    @IsString()
    text: string;
}

export class PlaceholderText {
    @IsString({})
    @MinLength(3)
    text: string;

    @IsString({})
    key: string;
}
