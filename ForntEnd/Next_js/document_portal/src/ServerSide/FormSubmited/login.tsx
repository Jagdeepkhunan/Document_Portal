'use server'

import React from "react";

import { delay, MakeGetRequest, MakePostRequest } from "../../Common" ;

type TypeProps = {
    name: string;
};

export default async function handleform(prevState:any, formData:any) {
    const authkey = formData.get('authkey');
    // console.log("--formData : ", formData ) ;
    // console.log("--authkey : ", authkey ) ;
    // ... (perform database operation)
    let res = await MakeGetRequest("/") ; 
    console.log(" -- res : ", res );
    // console.log(" -- res : ", res.status ) ;
    // console.log(" -- res : ", res.ok ) ;
    await delay(5000) ;
    return { message: 'Validating your Identity' };
}