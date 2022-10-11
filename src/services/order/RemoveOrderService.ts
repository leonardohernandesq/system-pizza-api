import prismaClient from "../../prisma";

interface IOrderRequest{
    order_id:string;
}

class RemoveOrderService{
    async execute({ order_id }: IOrderRequest){

        const order = await prismaClient.order.delete({
            where:{
                id: order_id,
            }
        })

        return order;

    }
}

export {RemoveOrderService}