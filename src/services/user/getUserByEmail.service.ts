import { prisma } from "../../prisma.js";
import { GetUserByEmailDTO } from "@schemas/user/getUsersByEmail.schema.js";

export const userService = {
    async getByEmail({email}: GetUserByEmailDTO){
        const user = await prisma.user.findUnique({
            where: {email},
        });

        return user
    }
}
