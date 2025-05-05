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
    {
      name: "Services",
      href: "/services",
      dropdown: [
        {
          name: "Market Research and Campaign Execution for Agri Brands",
          href: "/services/market-research-and-campaign-execution-for-agri-brands",
        },
        {
          name: "Performance Marketing and SEO Services for Agri Brands",
          href: "/services/performance-marketing-and-seo-services-for-agri-brands",
        },
      ],
    },
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
                  <NavigationMenuItem>
                    <Link
                      href="/Home"
                      className="mx-2 h-auto bg-transparent text-base font-normal text-muted transition-all hover:text-background"
                    >
                      Home
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link
                      href="/About"
                      className="mx-2 h-auto bg-transparent text-base font-normal text-muted transition-all hover:text-background"
                    >
                      About
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link
                      href="/Product"
                      className="mx-2 h-auto bg-transparent text-base font-normal text-muted transition-all hover:text-background"
                    >
                      Product
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <div className="relative gap-5">
                      <button
                        onClick={() => toggleSubMenu("Services")}
                        className="mx-2 h-auto bg-transparent text-base font-normal text-muted transition-all hover:text-background"
                      >
                        Services
                      </button>
                      {openSubMenu === "Services" && (
                        <div className="absolute left-0 mt-6 min-w-[350px] flex-col rounded-md bg-black/80 p-4 gap-4">
                          <Link
                            href="/services/market-research-and-campaign-execution-for-agri-brands"
                            className="block px-3 py-1 text-sm text-background hover:font-bold"
                          >
                            Market Research and Campaign Execution
                          </Link>
                          <Link
                            href="/services/performance-marketing-and-seo-services-for-agri-brands"
                            className="block px-3 py-1 text-sm text-background hover:font-bold"
                          >
                            Performance Marketing and SEO Services
                          </Link>
                        </div>
                      )}
                    </div>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="flex h-[51px] items-center justify-center space-x-2">
              <Link
                className="hidden h-full w-[200px] lg:block"
                href="mailto:connect@digicides.com"
              >
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
        <div className="fixed inset-0 top-20 z-[199] mx-4 h-1/3 rounded-[44px] bg-black/80 p-4 backdrop-blur-lg lg:hidden">
          <div className="flex flex-col items-start gap-4">
              <div className="flex w-full flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <Link href="/Home">
                    <Button
                      variant="link"
                      className="flex w-full items-center justify-center p-0 text-sm text-background"
                      onClick={() => toggleSubMenu("Home")}
                    >
                      <span>Home</span>
                    </Button>
                  </Link>
                  <Link href="/About">
                    <Button
                      variant="link"
                      className="flex w-full items-center justify-center p-0 text-sm text-background"
                      onClick={() => toggleSubMenu("About")}
                    >
                      <span>About</span>
                    </Button>
                  </Link>
                  <Link href="/product">
                    <Button
                      variant="link"
                      className="flex w-full items-center justify-center p-0 text-sm text-background"
                      onClick={() => toggleSubMenu("Product")}
                    >
                      <span>Product</span>
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button
                      variant="link"
                      className="flex w-full items-center justify-center p-0 text-sm text-background"
                      onClick={() => toggleSubMenu("Services")}
                    >
                      <span>Services</span>
                    </Button>
                  </Link>
                </div>
              </div>
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
