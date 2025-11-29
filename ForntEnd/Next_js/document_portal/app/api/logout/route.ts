import { logoutHandler }  from "../../../src/ServerSide/APIs/logout" ; 


export async function GET(request: Request, { params }: { params: Promise<{ team: string }> } ) {
    // const anyDynamicPath = await params ; 
    // console.log(" -- anyDynamicPath : ", anyDynamicPath ) ; 
    const Resp = await logoutHandler() ;
    console.log("logout request here" ) ;
    return Response.json( Resp )
}