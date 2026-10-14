"use client";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "../lib/auth-client";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";




const SignUpPage = () => {
  const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const user = Object.fromEntries(formData.entries())

  const{ data, error} = await authClient.signUp.email({
    ...user,
    callbackURL:'/'


  });

  if(data){
    redirect('/')

  }
if(error){
  console.log(error)
}
console.log(user,"from signup");

  };
   const socialLogin = async (provider: "google" | "github") => {
  alert("Are you ready for login")

    try {
      const { error } = await authClient.signIn.social({
        provider,
        callbackURL: "/",
      });

      if (error) {
        alert(error.message || "লগইন করা যায়নি।");
       
      }
    } catch {
      alert("সোশ্যাল লগইন ব্যর্থ হয়েছে।");
     
    }}
  return (
 
<div className="container mx-auto flex mt-3 flex-col items-center justify-center bg-gray-100 ">
    <div className="mb-6 text-center  ">
    <h1 className="text-2xl mt-2 font-bold ">
      অ্যাকাউন্ট তৈরি করুন
    </h1>

    <h2 className="mt-2 text-sm text-gray-600">
      বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
    </h2>
  </div>
 <div className="bg-white m-3 p-4 border-none rounded-2xl">
 

  <Form
    className="flex w-full max-w-sm flex-col gap-4 font-bold"
    onSubmit={onSubmit}
  >
    <TextField
      isRequired
      name="name"
      validate={(value) => {
        if (value.length < 3) {
          return "Name must be at least 3 characters";
        }
        return null;
      }}
    >
      <Label className="font-bold">নাম</Label>
      <Input placeholder="John Doe" />
      <FieldError />
    </TextField>

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
      অ্যাকাউন্ট তৈরি করুন
    </Button> 
  <div className="flex gap-2">  <Button type="submit" className="w-full bg-gray-200 text-black"  onPress={() => socialLogin("google")}>
     <FcGoogle />
Google দিয়ে চালিয়ে যান
    </Button>
    <Button  type="submit"  className="w-full bg-gray-200 text-black" onPress={() => socialLogin("github")}>
     <FaGithub /> GitHub দিয়ে চালিয়ে যান
    </Button></div>
  </Form>
 </div>
</div>

  );
};

export default SignUpPage;
