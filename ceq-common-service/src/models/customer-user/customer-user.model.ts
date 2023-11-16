import { CustomerUser } from './customer-user.interface';

/**
 * This is model class responsible for instantiating CustomerUserModel.
 * @public
 */
export class CustomerUserModel implements CustomerUser {
    private _id: string;
    private _name: string;
    private _emailId: string;
    private _privilege: string[];
    private _roles: string[];

    /**
     * @contructor
     * @param customerUser Values for the customer user
     */
    constructor(customerUser: CustomerUser) {
        this._id = customerUser.id;
        this._name = customerUser.name;
        this._emailId = customerUser.emailId;
        this._privilege = customerUser.privilege;
        this._roles = customerUser.roles;
    }

    /** Get Id for the customer user */
    get id(): string {
        return this._id;
    }

    /** Set Id for the customer user */
    set id(value: string) {
        this._id = value;
    }

    /** Get name for the customer user */
    get name(): string {
        return this._name;
    }

    /** Set name for the customer user */
    set name(value: string) {
        this._name = value;
    }

    /** Get email id for the customer user */
    get emailId(): string {
        return this._emailId;
    }

    /** Set email id for the customer user */
    set emailId(value: string) {
        this._emailId = value;
    }

    /** Get privilege for the customer user */
    get privilege(): string[] {
        return this._privilege;
    }

    /** Set privilege for the customer user */
    set privilege(value:string[]) {
        this._privilege = value;
    }
    
   /** Set roles for the customer user */
    get roles(): string[] {
        return this._roles;
    }

    /** Get roles for the customer user */
    set roles(value:string[]) {
        this._roles = value;
    }
}
