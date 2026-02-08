import { userRepository } from 'repositories/user/user.repository.js';
import { deleteUserSchemaDTO } from '@schemas/user/deleteUser.schema.js';

export async function deleteUserService({ id }: deleteUserSchemaDTO){
    const userExists = await userRepository.findById(id);

    if(!userExists){
        throw new Error("USER_NOT_FOUND");
    };

    await userRepository.deleteById(id);

    return {message: "User deleted successully"}
};

