"use client"

import { useReducer, useState } from "react";
import Card from "./Components/Card";
import { toast } from "sonner";



export default function Home() {
  
  
  return (
   <>
   <main className="m-4">
   <button onClick={()=>toast.success('Event has been created')} className="px-5 py-3 text-white bg-blue-500 rounded">Notify me</button>
   </main>
   
   </>
  );
}
