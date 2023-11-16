/**
 * This interface is for CustomerUser objects.
 * @public
 */
export interface CustomerUser {
    /** Id for the Customer User */
    id: string;

    /** Name for the Customer User */
    name: string;

    /** Email id for the Customer User */
    emailId: string;

    /** Privilege for the Customer User */
    privilege: string[];

    /** roles for the Customer User */
    roles: string[];
}
