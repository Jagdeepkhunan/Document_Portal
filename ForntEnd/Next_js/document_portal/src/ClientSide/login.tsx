'use client'

import React from "react";
import { useState, useActionState } from "react";
// import { useFormStatus } from "react-dom";


import Loginformhandler from "../ServerSide/FormSubmited/login" ;

const  Logo = "/document_portal_logo.svg" ;
// const Logo = "/document_portal_logo_compact.svg" ;

export default function LoginPage() {
    const [authLine, setAuthLine] = useState("");
    // @ts-ignore
    const [state, formAction, pending] = useActionState(Loginformhandler, { message: "" });
    //

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!file.name.endsWith(".authdoc")) {
            alert("Please upload a valid .authdoc file");
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            const text = event.target?.result as string;
            setAuthLine(text);
        };
        reader.readAsText(file);
    };

    //  console.log(" -- state : ", state ) ; 

    return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">
            <div className="flex flex-col items-center mb-6">
                <img src={Logo} alt="Document Portal Logo" className="w-96 h-auto mb-3" />
                <h1 className="text-3xl font-bold text-center">Login</h1>
            </div>

            <form  action={formAction}  className="space-y-5" > {/* onSubmit={handleSubmit} */} 
                <input name="csrfToken" /> 
                <div>
                    <label className="block mb-1 font-medium">Auth</label>
                    <textarea
                        name="authkey"
                        value={authLine}
                        onChange={(e) => setAuthLine(e.target.value)}
                        className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Authentication Code"
                        rows={4}
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Auth Key</label>
                    <input
                        type="file"
                        accept=".authdoc"
                        onChange={handleFileUpload}
                        className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                {state?.message && (
                    <div className="text-red-600 font-medium text-center bg-red-100 p-2 rounded-lg">
                        {state.message}
                    </div>
                )}
                <button
                    type="submit"
                    disabled={pending}
                    className={`w-full bg-blue-600 text-white p-3 rounded-xl font-semibold transition 
                        ${pending ? "opacity-25 cursor-not-allowed" : " cursor-pointer hover:bg-blue-700"}
                    `}
                    // className="w-full cursor-pointer bg-blue-600 text-white p-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                >
                    {pending ? "Validating..." : "Login" }
                </button>
            </form>
        </div>
    </div>
    );
}
