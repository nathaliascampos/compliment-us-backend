import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

interface IPayload {
    sub: string
}

// Verifica se user é admin
export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    // Receber o token 
    const authToken = request.headers.authorization;

    // Validar se token está preenchido
    if (!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ")


    try {
        // Validar de token é valido 
        const { sub } = verify(token, "0a6ae7ae069f0a8e2800df1acb972b38") as IPayload;

        // Recuperar informações do usuário 
        request.user_id = sub;

        return next()
    } catch (err) {
        return response.status(401).end()
    }

}
