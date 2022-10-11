import prismaClient from "../../prisma";

interface ICateforyRequest{
    name: string;
}

class CreateCategoryService{
    async execute({ name }: ICateforyRequest){
        
        if(name === ''){
            throw new Error('Categoria Inválida')
        }

        const category = await prismaClient.category.create({
            data:{
                nome: name,
            },
            select:{
                id:true,
                nome:true,
            }
        })

        return category;

    }
}

export {CreateCategoryService}