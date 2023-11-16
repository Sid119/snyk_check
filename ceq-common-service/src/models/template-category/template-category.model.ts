import { TemplateCategory } from './template-category.interface';
export * from './template-category.interface';
export class TemplateCategoryModel implements TemplateCategory {
    private _id: number;
    private _name: string;
    private _parentCategory: TemplateCategoryModel | null;

    /**
     * @constructor
     * @param templateCategory Values for template category
     */
    constructor(templateCategory: TemplateCategory) {
        this._id = templateCategory.id;
        this._name = templateCategory.name;
        this._parentCategory = templateCategory.parentCategory;
    }

    /** Get id for the template category */
    get id(): number {
        return this._id;
    }
    /** Set id for the template category */
    set id(value: number) {
        this._id = value;
    }

    /** Get name of the template category */
    get name(): string {
        return this._name;
    }
    /** Set name of the template category */
    set name(value: string) {
        this._name = value;
    }

    /** Get parent template category */
    get parentCategory(): TemplateCategoryModel | null {
        return this._parentCategory;
    }
    /** Set parent template category */
    set parentCategory(value: TemplateCategoryModel | null) {
        this._parentCategory = value;
    }

    // /** Get children of this category */
    // get childCategories(): TemplateCategoryModel[] {
    //     return this._childCategories;
    // }

    // /** Add child category to this category */
    // addChildCategory(category: TemplateCategoryModel): void {
    //     this._childCategories.push(category);
    // }
}
