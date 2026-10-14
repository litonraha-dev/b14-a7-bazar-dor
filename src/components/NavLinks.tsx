"use client";
import { authClient, useSession } from "@/app/lib/auth-client";
import { Button, ButtonRoot } from "@heroui/react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
interface ICategory {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}
const NavLinks = () => {
  const { data: session, isPending } = useSession();
  const pathname = usePathname();
  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/bazardor/categories")
      .then((res) => res.json())
      .then((date) => setCategories(date))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);
  // console.log(categories, "from navlinks");
  console.log(session?.user.name, "from navlinks");
  const handleSignOut=async()=>{
    const{error} = await authClient.signOut();
     if (error) {
    console.log(error.message);
    return;
  }
else{
  redirect('/signin')
}

   
}

  return (
    <header className=" container mx-auto m-2 ">
      <div>
        <div className="flex justify-between m-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🛒</span>
            <div>
              <h1 className="text-xl font-bold text-green-700 leading-tight">
                বাজার দর
              </h1>
            </div>
          </Link>
         <div >
           {session?.user ? (
            <>
              <h1>{session.user.name}</h1>
              <Button onClick={handleSignOut}>সাইন আউট</Button>
            </>
          ) : (
            <>
            <div className=" ">
                <Link href="/signin" className="btn btn-accent">
                  <Button> সাইন ইন</Button>
                </Link>

                <Link href="/signup">
                  <Button>সাইন আপ</Button>
                </Link>
              </div>
            </>
          )}
         </div>
        </div>
      </div>
      <div className="flex gap-4">
        {categories.map((cat) => (
          <Link href={`/category/${cat.id}`} key={cat.slug}>
            <div>
              <h1>
                {" "}
                <span>{cat.icon}</span> {cat.nameBn}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default NavLinks;
