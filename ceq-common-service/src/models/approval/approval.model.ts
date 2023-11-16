import { Approval } from './approval.interface';

/**
 * This is model class responsible for instantiating ApprovalModel.
 *
 * @public
 */
export class ApprovalModel implements Approval {
    private _id: number;
    private _approverId: number;
    private _approverOrder: number;
    private _status: number;
    private _name: string;
    private _email: string;

    /**
     * This constructor takes props argument in the
     * form of Approval interface.
     *
     * @constructor
     */
    constructor(approval: Approval) {
        this._id = approval.id;
        this._approverId = approval.approverId;
        this._approverOrder = approval.approverOrder;
        this._status = approval.status;
        this._name = approval.name;
        this._email = approval.email;
    }

    /** Get Id of the approval */
    get id(): number {
        return this._id;
    }
    /** Set Id of the approval */
    set id(value: number) {
        this._id = value;
    }

    /** Get Id of the approver */
    get approverId(): number {
        return this._approverId;
    }
    /** Set Id of the approver */
    set approverId(value: number) {
        this._approverId = value;
    }

    /** Get Order for approver */
    get approverOrder(): number {
        return this._approverOrder;
    }
    /** Set Order for approver */
    set approverOrder(value: number) {
        this._approverOrder = value;
    }

    /** Get Status of approval */
    get status(): number {
        return this._status;
    }
    /** Set Order for approver */
    set status(value: number) {
        this._status = value;
    }
    /** Get name of approval */
    get name(): string {
        return this._name;
    }
    /** Set name for approver */
    set name(value: string) {
        this._name = value;
    }
    /** Get email of approval */
    get email(): string {
        return this._email;
    }
    /** Set email for approver */
    set email(value: string) {
        this._email = value;
    }
}
