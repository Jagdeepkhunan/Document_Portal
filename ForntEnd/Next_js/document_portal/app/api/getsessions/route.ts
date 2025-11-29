import { getSessions }  from "../../../src/ServerSide/APIs/session" ; 


export async function GET(request: Request, { params }: { params: Promise<{ team: string }> } ) {
    // const anyDynamicPath = await params ; 
    // console.log(" -- anyDynamicPath : ", anyDynamicPath ) ; 
    const Resp = await getSessions() ;
    console.log("all sessions here" ) ;
    return Response.json( Resp )
}