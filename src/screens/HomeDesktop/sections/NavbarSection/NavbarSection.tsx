import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const NavbarSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "Services", href: "#" },
    { label: "Programs", href: "#" },
    { label: "Student testimonials", href: "#" },
    { label: "FAQs", href: "#" },
  ];

  return (
    <header className="w-full bg-[#c2c19f] py-2">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img className="w-[181px] h-[58px]" alt="Logo" src="/logo.png" />
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-8">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    href={item.href}
                    className="text-[#092315] font-text-regular-normal text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)]"
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="border border-solid border-[#092315] text-[#092315] font-text-regular-normal text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] px-5 py-2 h-auto"
            >
              Join
            </Button>
            <Button className="bg-[#092315] text-[#c2c19f] font-text-regular-normal text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] px-5 py-2 h-auto">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
