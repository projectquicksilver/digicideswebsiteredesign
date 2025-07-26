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

  // Navigation links array - single source of truth
  const navigationLinks = [
    {
      name: "Home",
      href: "/",
      type: "link"
    },
    {
      name: "About",
      href: "/about",
      type: "link"
    },
    {
      name: "Product",
      type: "dropdown",
      items: [
        {
          name: "Rural Reward",
          href: "/product/rural-reward"
        },
        {
          name: "Engagements",
          href: "/product/engagement"
        }
      ]
    },
    {
      name: "Services",
      type: "dropdown",
      items: [
        {
          name: "Market Research",
          href: "/services/market-research-for-agri-brands"
        },
        {
          name: "Performance Marketing",
          href: "/services/performance-marketing-for-agri-brands"
        }
        // Uncomment when needed:
        // {
        //   name: "Rural Reward",
        //   href: "/services/rural-reward"
        // }
      ]
    }
  ];

  console.log(openSubMenu);

  const toggleSubMenu = (name: string) => {
    setOpenSubMenu((prev) => (prev === name ? null : name));
  };

  const handleContactClick = () => {
    // GTM tracking for contact button clicks
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'button_click',
        button_name: 'get_in_touch_navbar',
        button_location: 'navbar',
        page_location: window.location.href
      });
    }
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
                  {navigationLinks.map((item, index) => (
                    <NavigationMenuItem key={index}>
                      {item.type === "link" ? (
                        <Link
                          href={item.href!}
                          className="mx-2 h-auto bg-transparent text-base font-normal text-muted transition-all hover:text-background"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <div
                          className="relative flex flex-col justify-start items-start gap-5"
                          onMouseEnter={() => setOpenSubMenu(item.name)}
                          onMouseLeave={() => setOpenSubMenu(null)}
                        >
                          <button
                            className="mx-2 h-auto bg-transparent text-base font-normal text-muted transition-all hover:text-background"
                          >
                            {item.name}
                          </button>
                          {openSubMenu === item.name && (
                            <div className="absolute left-0 pt-6">
                              <div className="h-6" />
                              <div className={`min-w-[${item.name === "Product" ? "250px" : "350px"}] flex-col rounded-md bg-black/80 p-4 gap-4 z-50`}>
                                {item.items?.map((subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    href={subItem.href}
                                    className="block px-3 py-1 text-sm text-background hover:font-bold"
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="flex h-[51px] items-center justify-center space-x-2">
              <Link
                className="hidden h-full w-[200px] lg:block"
                href="#contact-us"
                onClick={handleContactClick}
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
        <div className="fixed inset-0 top-20 z-[199] mx-4 h-fit rounded-[44px] bg-black/80 p-4 backdrop-blur-lg lg:hidden">
          <div className="flex flex-col items-start gap-4">
            <div className="flex w-full flex-col gap-4">
              <div className="flex flex-col gap-2">
                {navigationLinks.map((item, index) => (
                  <div key={index}>
                    {item.type === "link" ? (
                      <Link href={item.href!}>
                        <Button
                          variant="link"
                          className="flex w-full items-center justify-center p-0 text-sm text-background"
                        >
                          <span>{item.name}</span>
                        </Button>
                      </Link>
                    ) : (
                      <div className="flex flex-col gap-2">
                        <Button
                          variant="link"
                          className="flex w-full items-center justify-center p-0 text-sm text-background"
                          onClick={() => toggleSubMenu(item.name)}
                        >
                          <span>{item.name}</span>
                        </Button>
                        {openSubMenu === item.name && (
                          <div className="ml-4 flex flex-col gap-2">
                            {item.items?.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                href={subItem.href}
                                className="text-sm text-center text-background hover:font-bold"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <Link className="h-full w-full" href="#contact-us" onClick={() => {
              handleContactClick();
              setIsOpen(false);
            }}>
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