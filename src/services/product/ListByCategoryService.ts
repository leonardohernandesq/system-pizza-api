import prismaClient from "../../prisma";

interface IProductRequest{
    category_id: string;
}


class ListByCategoryService{
    async execute({ category_id }: IProductRequest){

        const findByCategory = await prismaClient.product.findMany({
            where:{
                category_id: category_id
            }
        })

        return findByCategory

    }
}

export {ListByCategoryService}