'use client'
 
import { useState } from 'react'
// import React, { useState } from 'react';

interface MyClientComponentProps {
    serverCompMsg?: string;
  }


export function TestComp( { serverCompMsg = "None" }: MyClientComponentProps ) {
    return (
        <div>  client compo {serverCompMsg} </div>
    )
}


 