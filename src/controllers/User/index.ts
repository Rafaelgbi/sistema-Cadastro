import * as creatUser from './create.js';
import * as getUserEmail from './getEmail.js';
import * as deleteUser from './delete.js';
 
export const UserController = {
    ...creatUser,
    ...getUserEmail,
    ...deleteUser,
}