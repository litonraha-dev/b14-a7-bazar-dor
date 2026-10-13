"use client";
import { useSession } from "@/app/lib/auth-client";
import { Button, ButtonRoot } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const NavLinks = () => {
  const { data: session, isPending } = useSession();
  const pathname = usePathname();
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/bazardor/categories")
      .then((res) => res.json())
      .then((date) => setCategories(date))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);
  // console.log(categories, "from navlinks");

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

          <div className="flex gap-3 ">
            <Link href="/signin" className="btn btn-accent">
              <Button> সাইন ইন</Button>
            </Link>

            <Link href="/signup">
              <Button>সাইন আপ</Button>
            </Link>
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
