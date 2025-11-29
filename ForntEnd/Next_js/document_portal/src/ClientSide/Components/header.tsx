'use client'

import React from "react";
import { useState, useEffect, useActionState } from "react";
import {MakeGetRequest} from "../../Common";
import { title } from "process";

export default function Header({ popupData = { title:"", message:""} , onPopUpClsoe = () => {} }) {
    const [popup_title, setpopuptitle] = useState<string>("");
    const [popup_message, setpopupmessage] = useState<string>("");
    //
    useEffect( () => {
        // console.log(" popup data changed : ", popupData ) ;
        if( popupData?.title != "" && popupData?.message != "" ){
            // console.log("showing popup here");
            // setTimeout(() => {
                setpopuptitle(popupData.title) ;
                setpopupmessage(popupData.message) ;
            // }, 200);
        }
    }, [popupData])

    const logout = async () => {
        // clear session / token logic here 
        let ResLogout = await MakeGetRequest("/api/logout") ; 
        if( ResLogout.logout){window.location.reload() ; }
        else{ // console.log("poup shows : ", ResLogout.message );
            setpopuptitle("Error") ;
            setpopupmessage(ResLogout.message) ;
         }
        console.log("Logout clicked", ResLogout );
        
    };

    const onClosePopup = () => {
        onPopUpClsoe() ;
        setpopuptitle("") ;
        setpopupmessage("") ;
    }
    // console.log(" -- popup_title :", popup_title  ) ;
    // console.log(" -- popup_message :", popup_message  ) ;

    return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200">
      <div className=" mx-auto flex items-center justify-between px-12 h-[60px]">

        {/* Left: Logo + Name */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src="/document_portal_logo_compact.svg"
            alt="Logo"
            width={36}
            height={36}
            className="w-9 h-9"
          />
          <h1 className="text-xl font-semibold text-gray-800">
            Document Portal
          </h1>
        </div>

        {/* Right: Logout Button */}
        <button
          onClick={logout}
          className="px-4 py-2 bg-blue-500 cursor-pointer hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition"
        >
          Logout
        </button>
      </div>
      {(popup_title && popup_message ) && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          
          {/* Popup Box */}
          <div className="bg-white w-[600px] rounded-lg shadow-lg p-6 animate-fadeIn relative">

            {/* Close Button */}
            <button
              onClick={onClosePopup}
              className="absolute top-6 right-6 text-2xl  text-gray-600 cursor-pointer"
            >
              X
            </button>

            <h2 className="text-lg font-semibold mb-3">{popup_title}</h2>
            <p className="text-sm text-gray-700 mb-4">
               {popup_message}
            </p>

            <button
              onClick={onClosePopup}
              className="w-full mt-8 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md cursor-pointer"
            >
              Close
            </button>

          </div>

        </div>
      )}
    </header>
  );
}
