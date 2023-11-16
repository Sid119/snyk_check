/**
 * This interface is for Approval objects.
 * @public
 */
export interface Approval {
    /** Id of the approval */
    id: number;

    /** Id of the approver */
    approverId: number;

    /** Order of the approver */
    approverOrder: number;

    /** Status of the approval */
    status: number;
    name: string;
    email: string;
}
