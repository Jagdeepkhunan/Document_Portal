
import type { NextRequest } from 'next/server'

import { loginHandler } from "../../../../src/ServerSide/APIs/login" ;


export async function GET(request: Request, { params }: { params: Promise<{ team: string }> } ) {
    const anyDynamicPath = await params ; 
    console.log(" -- anyDynamicPath : ", anyDynamicPath ) ; 
    const Resp = await loginHandler() ;
    return Response.json({ message: Resp })
}

export async function POST(request: Request, { params }: { params: Promise<{ team: string }> } ) {
    return Response.json({ message: 'Hello World' })
}