import type { Request, Response } from "express";
import { createUserSchema } from '../../schemas/user/user.schema.js'
import { userService } from "../../services/user/user.service.js";

export async function createUser(req: Request, res: Response){
    try{
        const data = await createUserSchema.validate(req.body, {
            abortEarly: false,
        });

        const user = await userService.create(data);

        return res.status(201).json({msg: "Usuário cadastrado com sucesso!", user,});

    }catch(error: any){
        if(error.name === "ValidationError"){
            return res.status(400).json({
                errors: error.errors,
            });
        }

        if(error.message === "EMAIL_ALREADY_EXISTS"){
            return res.status(409).json({
                message: "e-mail já cadastrado",
            });
        }

        console.error(error);

        return res.status(500).json({
            message: "Erro interno do servidor",
        });
    }
}

