import * as creatUser from './create.js';
import * as getUserEmail from './getEmail.js';

export const UserController = {
    ...creatUser,
    ...getUserEmail,
}