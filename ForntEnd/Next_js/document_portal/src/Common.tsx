import { App_Auth } from "./urls" ; 

export function delay(ms:number ) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export async function MakeGetRequest(url : string){
    const res = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" , "X-App-Auth" : App_Auth },
    });
    
    let data : Record<string, any>  = { } ;
    let resBody : string = await res.text() ;
    try{  data = JSON.parse(resBody);  }
    catch (error){ data = { "message" : resBody } ;  }
    data.status = res.status ; 
    data.ok = res.ok ;
    return data;
}

export async function MakePostRequest(url : string, body : Record<string, any> ){ //  console.log(" request with data : ", JSON.stringify(body) ) ;
    const res = await fetch(url , {
        method: "POST",
        headers: { "Content-Type": "application/json" , "X-App-Auth" : App_Auth },
        body: JSON.stringify(body),
    });
    let data : Record<string, any>  = { } ;
    let resBody : any = await res.text() ;
    try{  data = JSON.parse(resBody);  }
    catch (error){ data = { "message" : resBody } ;  }
    data.status = res.status ; 
    data.ok = res.ok ;
    return data;
}