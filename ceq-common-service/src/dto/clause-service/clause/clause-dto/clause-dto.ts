import { Optional } from '@nestjs/common';
import { IsOptional, IsString } from 'class-validator';

export class ClauseSectionDto {
  
    @IsString()
    @IsOptional()
    id: string;

    @IsString()
    name: string;
  
    @IsString()
    parentSectionId: string | null;

  }

export class ClauseDto {
    
    @IsString()
    @IsOptional()
    id: string;

    @IsString()
    content: string;
  
    @IsString()
    sectionId: string;
}
                                    