
import {TestComp} from "../../src/ClientSide/testComp" ;

export default async function Home() {
    //  await createSession("anyUSerID"); 
    const anyvalue_in_serverCompo = "server comp value" ; 
    return ( <div> server rendered page < TestComp serverCompMsg={anyvalue_in_serverCompo} /> </div>
    )
  }