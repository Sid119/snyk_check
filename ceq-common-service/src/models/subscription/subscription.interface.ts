import { CustomerUserModel } from "../customer-user/customer-user.model";
import { CustomerModel } from "../customer/customer.model";

/**
 * This interface is for Subscription objects.
 * @public
 */
export interface Subscription {

    tenantId: string;

    tenantCode: string;
 
    users: CustomerUserModel[];

    customer: CustomerModel;

    type: string;

    createdAt: string;

    startDate: string;

    expiryDate: string;
    
    expiryTime: number;


}