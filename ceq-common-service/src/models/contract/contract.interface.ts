import { Approval } from '../approval/approval.interface';
export interface Contract {
    id: string;
    title: string;
    ownerId: string;
    pdfDocId: string;
    editableDocId: string;
    status: number;
    creationDate: number;
    approvalDate: number;
    renewalDate: number;
    acceptanceDate: number;
    terminationDate: number;
    lastModifiedDate: number;
    lastModifiedBy: string;
    comments: number[];
    notes: number[];
    accessList: string[];
    approvals: Approval[];
}
