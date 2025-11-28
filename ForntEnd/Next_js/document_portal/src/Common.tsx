const API_URL = "http://127.0.0.1:8000" ;
const app_auth = process.env.API_Access_key! ; 

console.log(" -- app_auth : ", app_auth ) ; 

export function delay(ms:number ) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export async function MakeGetRequest(url : string){
    const res = await fetch(API_URL + url, {
        method: "GET",
        headers: { "Content-Type": "application/json" , "X-App-Auth" : app_auth },
    });
    
    let data = await res.json();
    data.status = res.status ; 
    data.ok = res.ok ;
    return data;
}

export async function MakePostRequest(url : string, body : Record<string, any> ){
    const res = await fetch(API_URL + url , {
        method: "POST",
        headers: { "Content-Type": "application/json" , "X-App-Auth" : app_auth },
        body: JSON.stringify(body),
    });
    
    let data = await res.json();
    data.status = res.status ; 
    data.ok = res.ok ;
    return data;
}