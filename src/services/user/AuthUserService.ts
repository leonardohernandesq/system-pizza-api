import prismaClient from "../../prisma";
import { compare } from 'bcryptjs';
import { sign } from "jsonwebtoken";

interface IAuthRequest{
    email:string;
    password:string;
}

class AuthUserService{
    async execute({email, password}:IAuthRequest){
        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(!user){
            throw new Error("Usuário está incorreto")
        }
        
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Usuário está incorreto")
        }

        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET, 
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        }
    }
}

export { AuthUserService };