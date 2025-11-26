
import { createSession } from "../session" ;

export async function loginHandler( ) {
    await createSession("anyUserID") ; 
    return "test login resp" ;
}