'use client'

import React from "react";
import { useState, useEffect, useActionState } from "react";
import {MakeGetRequest} from "../../Common";

import Header from "../Components/header" ; 
import Sessions from "./sessions";

export default function DashboardPage() {
    const [sessions, setlistsessions] = useState([]);
    //
    useEffect( ()=> { 
        loadSessionData() ;
    }, [])
    //
    const loadSessionData = async () => {
        // clear session / token logic here 
        let ResSession = await MakeGetRequest("/api/getsessions") ; 
        // console.log("laoding session data", ResSession );
        // let temp = ResSession.session.concat( ResSession.session ).concat( ResSession.session ) ;
        setlistsessions( ResSession.session ) ;
        //
    };
    return ( 
    <div className="" >
        <Header popupData={{"title" : "", "message" : ""} } onPopUpClsoe={() => {} } />
        <div className="flex w-full">  
            {/* LEFT PANEL — hidden on mobile */}
            <div className="hidden md:block w-64 bg-gray-100 border-r border-gray-300 p-4 min-h-[calc(100vh-62px)]">
                {/* <h2 className="font-semibold mb-3">Left Panel</h2> */}
                <Sessions sessions={sessions} />
            </div>
    
            {/* MAIN CONTENT */}
            <div className="flex-1 p-4">
                <h1 className="text-xl font-bold">Main Content Area</h1>
                <p>Your main content goes here...</p>
            </div>
        </div>
    </div>
    )
}

  