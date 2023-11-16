import { TemplateCategoryModel } from './template-category.model';

/**
 * This interface is for TemplateCategory objects.
 * @public
 */
export interface TemplateCategory {
    /** Id for the template category */
    id: number;

    /** Name for the template category */
    name: string;

    /** Parent Category if exists (nullable) */
    parentCategory: TemplateCategoryModel | null;
}
