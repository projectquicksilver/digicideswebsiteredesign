"use client";

import { Menu, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  console.log(openSubMenu);

  const MENU_ITEMS = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Product", href: "/product" },
  ];

  const toggleSubMenu = (name: string) => {
    setOpenSubMenu((prev) => (prev === name ? null : name));
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={"sticky inset-x-0 top-4 z-[100] w-full transform px-4"}
      >
        <div className="mx-auto flex h-[63px] w-full max-w-6xl items-center justify-center rounded-full bg-black/80 p-1 pr-1.5 backdrop-blur-lg">
          <div className="flex w-full items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold text-foreground"
            >
              <Image
                src="/Logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="ml-1 h-[51px] w-full rounded-full"
              />
            </Link>
            <div className="ml-4 hidden items-center lg:flex">
              <NavigationMenu>
                <NavigationMenuList>
                  {MENU_ITEMS.map((item) => (
                    <NavigationMenuItem key={item.name}>
                      <Link
                        href={item.href}
                        className="mx-2 h-auto bg-transparent text-base font-normal text-muted transition-all hover:text-background"
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="flex h-[51px] items-center justify-center space-x-2">
              <Link className="h-full w-[200px] hidden lg:block" href="mailto:connect@digicides.com">
                <Button variant="default" className="h-full w-full">
                  <span className="text-lg text-black">Get in touch ↗ </span>
                </Button>
              </Link>
              <Button
                className="h-[51px] w-[51px] lg:hidden"
                size="sm"
                variant="secondary"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                {isOpen ? (
                  <XIcon className="duration-300" />
                ) : (
                  <Menu className="duration-300" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="fixed h-1/3 inset-0 top-20 z-[199] mx-4 rounded-[44px] bg-black/80 p-4 backdrop-blur-lg lg:hidden">
          <div className="flex flex-col items-start gap-4">
            {MENU_ITEMS.map((item) => (
              <div className="flex w-full flex-col gap-4" key={item.name}>
                <div className="flex flex-col gap-2">
                  <Link
                    href={item.href}
                  >
                    <Button
                    variant="link"
                    className="flex w-full items-center justify-center p-0 text-sm text-background"
                    onClick={() => toggleSubMenu(item.name)}
                  >
                    <span>{item.name}</span>
                  </Button>
                  </Link>
                </div>
              </div>
            ))}
            <Link className="h-full w-full" href="mailto:connect@digicides.com">
              <Button variant="default" className="h-full w-full">
                <span className="text-lg text-black">Get in touch ↗ </span>
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
