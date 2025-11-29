'use client'

import React from "react";
import { useState, useActionState } from "react";



export default function Sessions({ sessions = [] }) {
    // const  sessions : any = [{_id:"abcsession", createdAt:"2025-11-29",  isActive : true }] ;
    return (
        <div className="" >
            {/* Create New Session Button */}
            <button
            className="
                w-full px-4 py-2 mb-4
                bg-blue-500 text-white rounded-lg text-sm font-medium
                cursor-pointer hover:bg-blue-700
                transition
            "
            hidden
            >
            Create New Session
            </button>
            <h2 className="font-semibold mb-3">Your Sessions</h2>

            <ul className="space-y-2">
            {sessions.map((ses : any) => (
                <li
                key={ses._id}
                // className="p-3 bg-white rounded-lg shadow-sm border border-gray-200 text-sm"
                className=" cursor-pointer
                p-3 bg-white rounded-lg border border-gray-200 text-sm
                shadow-sm transition-all cursor-pointer
                hover:bg-blue-50 hover:scale-[1.02] hover:shadow-md "
                >
                <div className="font-medium">
                    Session: {ses._id.slice(-6)}
                </div>
                <div className="text-gray-600 text-xs">
                    {ses.createdAt}
                </div>
                <div
                    className={`text-xs mt-1 font-semibold ${
                    ses.isActive ? "text-green-600" : "text-red-600"
                    }`}
                >
                    {ses.isActive ? "Active" : "Inactive"}
                </div>
                </li>
            ))}
            </ul>
        </div>
    )
}