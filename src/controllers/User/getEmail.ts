import type { Request, Response } from "express";
import { getUserByEmailSchema } from "@schemas/user/getUsersByEmail.schema.js";
import { userService } from "@services/user/getUserByEmail.service.js";

export async function getUserEmail(req: Request, res: Response){

    try{
    
        const data = await getUserByEmailSchema.validate(req.query, {
            abortEarly: false,
        });

        const user = await userService.getByEmail(data);

        if(!user) {
            return res.status(404).json({
                message: "Usuário não encontrado",
            });
        };

        return res.status(200).json(user);

    }catch(error:any){

        if(error.name === "ValidationError"){
            return res.status(400).json({
                errors: error.errors,
            });
        }

        console.error(error);

        return res.status(500).json({
            mensagem: "Erro interno do servidor"
        })
    }
};
