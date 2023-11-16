import { Approval } from '../approval/approval.interface';
/**
 * This interface is for Template objects.
 * @public
 */
export interface Template {
    id: string;
    title: string;
    ownerId: number;
    editableDocId: string;
    creationDate: string;
    lastModifiedDate: string;
    lastModifiedBy: string;
    accessList: string[];
    status: string;
    description: string;
    ownerAccess: string;
    ownerName: string;
    categoryName: string;
    subCategoryName: string;
    approvalType: string;
    approvalList: Approval[];
}
