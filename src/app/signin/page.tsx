"use client";

import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { authClient } from "../lib/auth-client";
import { redirect } from "next/navigation";


const SignInPage = () => {
 const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   const formData = new FormData(e.currentTarget);
   const user = Object.fromEntries(formData.entries())
 
   const{ data, error} = await authClient.signIn.email({
     ...user,
     callbackURL:'/'
 
 
   });
 
   if(data){
     redirect('/')
 
   }
 if(error){
   console.log(error)
 }
 console.log(user,"from signin")
 };
  return (
    <div className="container mx-auto flex mt-3 flex-col items-center justify-center bg-gray-100 ">
       <div className="mb-6 text-center ">
    <h1 className="text-2xl font-bold text-gray-900">
      সাইন ইন
    </h1>

    <h2 className="mt-2 text-sm text-gray-600">
      বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
    </h2>
  </div>
 <div className="bg-white m-3 p-4 border-none rounded-2xl">
  

  <Form
    className="flex w-full max-w-sm flex-col gap-4 font-bold"
    onSubmit={onSubmit}
  >
   

    <TextField
      isRequired
      name="email"
      type="email"
      validate={(value) => {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          return "Please enter a valid email address";
        }
        return null;
      }}
    >
      <Label className="font-bold">ইমেইল</Label>
      <Input placeholder="john@example.com" />
      <FieldError />
    </TextField>

    <TextField
      isRequired
      name="password"
      type="password"
      minLength={8}
      validate={(value) => {
        if (value.length < 8) {
          return "Password must be at least 8 characters";
        }
        if (!/[A-Z]/.test(value)) {
          return "Password must contain at least one uppercase letter";
        }
        if (!/[0-9]/.test(value)) {
          return "Password must contain at least one number";
        }
        return null;
      }}
    >
      <Label className="font-bold">পাসওয়ার্ড</Label>
      <Input placeholder="Enter your password" />
      <Description>
        Must be at least 8 characters with 1 uppercase and 1 number
      </Description>
      <FieldError />
    </TextField>

    <Button type="submit" className="w-full">
      সাইন ইন
    </Button>
  </Form>
 </div>
</div>
  );
};

export default SignInPage;
