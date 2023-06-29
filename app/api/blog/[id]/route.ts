import prisma from "@/prisma";
import { NextResponse } from "next/server";
import { main } from "../route";


export const GET = async (req: Request, res: NextResponse) => {

    try {
        await main()
        const id = req.url.split("/blog/")[1]
        const post = await prisma.post.findFirst({where: {id}});
        if(!post){
            return NextResponse.json({message: "Post Not Found"}, {status:404})
        }
        return NextResponse.json({message: "Success",post}, {status:200})
    } catch (error) {
        return NextResponse.json({message: "Error", error}, {status: 500})
    }finally{
        await prisma.$disconnect()
    }
    
}
export const PUT = async (req: Request, res: NextResponse) => {

    const {title, desc} = await req.json()

    try {
        await main()
        const id = req.url.split("/blog/")[1]
        const post = await prisma.post.update({data: { title, desc}, where: {id}});
        if(!post){
            return NextResponse.json({message: "Post Not Found"}, {status:404})
        }
        return NextResponse.json({message: "Success",post}, {status:200})
    } catch (error) {
        return NextResponse.json({message: "Error", error}, {status: 500})
    }finally{
        await prisma.$disconnect()
    }
    
}
export const DELETE = async (req: Request, res: NextResponse) => {

    try {
        await main()
        const id = req.url.split("/blog/")[1]
        const post = await prisma.post.delete({where: {id}});
        
        return NextResponse.json({message: "Success", post}, {status:200})
    } catch (error) {
        return NextResponse.json({message: "Error", error}, {status: 500})
    }finally{
        await prisma.$disconnect()
    }
    
}