"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href={"/"} className="sidebar-logo" />
        <Image
          src={"/assets/images/logo-text.svg"}
          alt="logo"
          width={180}
          height={28}
        />

        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((element) => {
                const isActive = element.route === pathname;

                return (
                  <li
                    key={element.route}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "bg-purple-gradient text-white"
                        : "text-gray-700"
                    }`}
                  >
                    <Link href={element.route} className="sidebar-link">
                      <Image
                        src={element.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {element.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(6, navLinks.length).map((element) => {
                const isActive = element.route === pathname;

                return (
                  <li
                    key={element.route}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "bg-purple-gradient text-white"
                        : "text-gray-700"
                    }`}
                  >
                    <Link href={element.route} className="sidebar-link">
                      <Image
                        src={element.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {element.label}
                    </Link>
                  </li>
                );
              })}

              <li className="flex-center cursor-pointer p-4 gap-2">
                <UserButton afterSignOutUrl="/" showName />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className={"button bg-purple-gradient bg-cover"} />
            <Link href={"/sign-in"}>Login</Link>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
