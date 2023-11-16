import { Customer } from './customer.interface';

/**
 * This is model class responsible for instantiating CustomerModel.
 * 
 * @public
 */
export class CustomerModel implements Customer {
    private _id: string;
    private _name: string;
    private _createdAt: Date;
    private _status: string;

    /**
     * This constructor takes props argument in the
     * form of Customer interface.
     * @constructor
     */
    constructor(props: Customer) {
        this._id = props.id;
        this._name = props.name;
        this._status = props.status;
    }

    /** Get Id for the Customer */
    get id(): string {
        return this._id;
    }
    /** Set Id for the Customer */
    set id(id: string) {
        this._id = id;
    }

    /** Get name for the Customer */
    get name(): string {
        return this._name;
    }
    /** Set name for the Customer */
    set name(name: string) {
        this._name = name;
    }

    /** Get creation date for the Customer */
    get createdAt(): Date {
        return this._createdAt;
    }
    /** Set creation date for the Customer */
    set createdAt(createdAt: Date) {
        this._createdAt = createdAt;
    }

    /** Get status for the Customer */
    get status(): string {
        return this._status;
    }
    /** Set status for the Customer */
    set status(status: string) {
        this._status = status;
    }
}
