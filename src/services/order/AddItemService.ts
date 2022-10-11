import prismaClient from "../../prisma";

interface IItemRequest{
    order_id: string;
    product_id: string;
    amount: number;
}

class AddItemService{
    async execute({order_id, product_id, amount}: IItemRequest){

        const order = await prismaClient.item.create({
            data:{
                order_id: order_id,
                product_id: product_id,
                amount
            }
        })

        return order

    }
}

export {AddItemService}