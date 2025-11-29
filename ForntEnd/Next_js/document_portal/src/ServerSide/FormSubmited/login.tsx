'use server'

import React from "react";

import { delay, MakeGetRequest, MakePostRequest } from "../../Common" ;
import { URL_HealthCheck_GET, URL_Login_POST} from "../../urls" ;
import { createSession } from "../session" ;


type TypeProps = {
    name: string;
};

export default async function handleform(prevState:any, formData:any) {
    const authkey = formData.get('authkey');
    if ( authkey.includes("DOCUMENTPORTAL") ){
        let ResLogin = await MakePostRequest(URL_Login_POST,{"AuthCode" : authkey}) ; 
        console.log(" -- res : ", ResLogin );
        if(ResLogin.sessionID){
            await createSession(ResLogin.sessionID) ; 
        } else if(ResLogin.Error){
            return { message: 'Faild to Authenticate. C103' }
        } else {
            return { message: 'Faild to Authenticate. C102' }
        }
    }else{
        return { message: 'Faild to Authenticate. C101' }
    }
    // console.log("--formData : ", formData ) ;
    // console.log("--authkey : ", authkey ) ;
    // let res = await MakeGetRequest(URL_HealthCheck_GET) ; 
    // console.log(" -- res : ", res );
    // console.log(" -- res : ", res.status ) ;
    // console.log(" -- res : ", res.ok ) ;
    // await delay(5000) ;
    
    
}