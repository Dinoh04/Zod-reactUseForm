"use client"

import { useReducer, useState } from "react";
import Card from "./Components/Card";
import { toast } from "sonner";
import { useForm, SubmitHandler} from "react-hook-form";
import { resolve } from "path";
import { Schema, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";



const formHook = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email(),
  message: z.string().min(3,"Message must be at least 3 characters")
})



type FormFields = z.infer<typeof formHook>;
export default function Home() {
  const {
   register,
   handleSubmit,
   formState : { errors, isSubmitting},
   reset
  } = useForm<FormFields>({
    defaultValues: {
      email: "Ronaldino@gmail.com",
    },
     resolver : zodResolver(formHook)
    
  });  

   
const onSubmit: SubmitHandler<FormFields> =  async (data) =>{
    await new Promise((resolve)=> setTimeout(resolve,1000));
    console.log(data);  
    reset();
}

  
  return (
   <>
   <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
   <input {...register("name")} 
    type="text"
    placeholder="Name"
    className="px-3 py-2 bg-slate-800  rounded"
    />
    
    {errors.name && (<p className="text-red-500">{`${errors.name.message}`}</p>)}

    <input {...register("email")}
    type="email"
    placeholder="Email"
    className="px-4 py-2 bg-slate-800 rounded"
    />
    <input {...register("numéro")}
    type="number"
    placeholder="Numéro"
    className="px-4 py-2 bg-slate-800  rounded"
    />
    <input {...register("message")}
    type="text"
    placeholder="Message"
    className="px-4 py-2 bg-slate-800  rounded"
    />
    
    <button disabled={isSubmitting} type="submit" className="bg-blue-500 disabled:bg-gray-500 py-2 rounded">
      {isSubmitting ? "Loading...": "Submit"}
    </button>
    
   </form>
   </>
  );
}


