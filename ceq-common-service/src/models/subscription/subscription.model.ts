import { CustomerUserModel } from "../customer-user/customer-user.model";
import { CustomerModel } from "../customer/customer.model";
import { Subscription } from "./subscription.interface";

/**
 * This is model class responsible for instantiating SubscriptionModel.
 * 
 * @public
 */
export class SubscriptionModel implements Subscription {
    private _tenantId: string;
    private _tenantCode: string;
    private _customer: CustomerModel;
    private _users: CustomerUserModel[];
    private _type: string;
    private _createdAt: string;
    private _startDate: string;
    private _expiryDate: string;
    private _expiryTime: number;
    
    /**
     * Constructor to create subscription
     * @constructor
     * @param subscription Values for Subscription model
     */
    constructor(subscription: Subscription) {
        this._tenantId = subscription.tenantId;
        this._tenantCode = subscription.tenantCode;
        this._customer = subscription.customer
        this._users = subscription.users;
        this._type = subscription.type;
        this._expiryTime=subscription.expiryTime;
        this._createdAt = new Date().toISOString();
        this._expiryDate = new Date().toISOString();
        this._startDate = new Date().toISOString();
    }

    /** Get Customer of subscription */
    get customer(): CustomerModel | undefined {
        return this._customer;
    }
    /** Set Customer of subscription */
    set customer(customer: CustomerModel | undefined) {
        this._customer = customer;
    }

    /** Get Users associated with the subscription */
    get users(): CustomerUserModel[] {
        return this._users;
    }
    /** Set Users associated with the subscription */
    set users(users: CustomerUserModel[]) {
        this._users = users;
    }

     /** Set tenantId associated with the subscription */
    set tenantId(tenantId: string) {
        this._tenantId = tenantId;
    }
    /** get tenantId associated with the subscription */
    get tenantId(): string {
        return this._tenantId;
    }
    /** set tenantCode associated with the subscription */
    set tenantCode(tenantCode: string) {
        this._tenantCode = tenantCode;
    }
    /** get tenantCode associated with the subscription */
    get tenantCode(): string {
        return this._tenantCode;
    }

    /** Get Type of subscription */
    get type(): string {
        return this._type;
    }
    /** Set Type of subscription */
    set type(type: string) {
        this._type = type;
    }

    /** Get Creation date of subscription */
    get createdAt(): string {
        return this._createdAt;
    }
    /** Set Creation date of subscription */
    set createdAt(date: string) {
        this._createdAt = date;
    }

    /** Get Start date of subscription */
    get startDate(): string {
        return this._startDate;
    }
    /** Set Start date of subscription */
    set startDate(date: string) {
        this._startDate = date;
    }

    /** Get Expiry date of subscription */
    get expiryDate(): string {
        return this._expiryDate;
    }
    /** Set Expiry date of subscription */
    set expiryDate(date: string) {
        this._expiryDate = date;
    }
    
    /** Get Expiry date of subscription */
    get expiryTime(): number {
        return this._expiryTime;
    }
    /** Set Expiry date of subscription */
    set expiryTime(time: number) {
        this._expiryTime = time;
    }

    /** JSON object for subscription */
    toJSON() {
        return {
            customerId: this.customer,
            createdAt: this.createdAt,
            expiryDate: this.expiryDate,
            expiryTime:this.expiryTime,
            startDate: this.startDate,
            type: this.type,
            users: this.users,
        };
    }
}