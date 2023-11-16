import { isEmail } from 'class-validator';

export default function isValidEmail(email: string) {
    return isEmail(email);
}
