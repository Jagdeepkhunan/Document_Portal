
import { getSession, deleteSession } from "../session" ;
import { MakePostRequest } from "../../Common";
import { URL_AllSession_POST } from "../../urls" ;

export async function getSessions( ) {
    let session : any = await getSession() ;
    // console.log(" -- session : ", session ) ;
    let res = await MakePostRequest(URL_AllSession_POST, { "session" : session} )
    // console.log("logout  res from backend : ", res ) ;
    if( res.Error){ return { message : "Error: C106", session:[]} } ;  
    if( res.session?.length > 0 ){
        return { message : "", session:res.session } ;
    } else{ return { message : "Error: C107", session:[]} ; }
}