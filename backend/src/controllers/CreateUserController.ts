import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

// Pega informações do server e passa para o service
// server -> controller -> service

class CreateUserController {
    async handle(request: Request, response: Response) {
        const { name, email, admin, password } = request.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({ name, email, admin, password });

        return response.json(user);
    }
}

export { CreateUserController };