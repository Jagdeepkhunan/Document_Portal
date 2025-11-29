
import { getSession, deleteSession } from "../session" ;
import { MakePostRequest } from "../../Common";
import { URL_Logout_POST } from "../../urls" ;

export async function logoutHandler( ) {
    let session : any = await getSession() ;
    // console.log(" -- session : ", session ) ;
    let res = await MakePostRequest(URL_Logout_POST, { "session" : session} )
    // console.log("logout  res from backend : ", res ) ;
    if( res.Error){ return { message : "Error: C104", logout:false} } ;  
    if( res.isdeactivated){ 
        await deleteSession() ;
        return { message : "Logout Sucessfull", logout:true} ;
    } else{ return { message : "Error: C105", logout:false} ; }
}