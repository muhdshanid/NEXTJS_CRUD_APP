import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function main () {
    try {
        await prisma.$connect()
    } catch (error) {
        return Error("Database connection failed")
    }
}

export const GET = async (req: Request, res: NextResponse) => {

    try {
        await main()
        const posts = await prisma.post.findMany();
        return NextResponse.json({message: "Success",posts}, {status:200})
    } catch (error) {
        return NextResponse.json({message: "Error", error}, {status: 500})
    }finally{
        await prisma.$disconnect()
    }
    
}
export const POST = async (req: Request, res: NextResponse) => {

    const {title, desc} = await req.json()
    try {
        await main()
        const newPost = await prisma.post.create({
            data: {
                title,
                desc
            }
        });
        return NextResponse.json({message: "Success",newPost}, {status:200})
    } catch (error) {
        return NextResponse.json({message: "Error", error}, {status: 500})
    }finally{
        await prisma.$disconnect()
    }
    
}