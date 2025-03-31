import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    { title: "About Us", href: "#" },
    { title: "Contact Us", href: "#" },
    { title: "Our Services", href: "#" },
    { title: "Student Login", href: "#" },
    { title: "Blog Posts", href: "#" },
  ];

  // Footer links data
  const footerLinks = [
    { title: "Privacy Policy", href: "#" },
    { title: "Terms of Service", href: "#" },
    { title: "Cookie Settings", href: "#" },
  ];

  return (
    <footer className="w-full bg-[#092315] py-20">
      <div className="container mx-auto px-16 max-w-[1440px]">
        <div className="flex flex-col gap-16">
          {/* Main footer content */}
          <div className="flex justify-between">
            {/* Logo and navigation */}
            <div className="flex flex-col gap-[68px]">
              {/* Logo */}
              <div className="w-[181px] h-[58px] -ml-4 bg-[url(/logo-1.png)] bg-[100%_100%]" />

              {/* Navigation links */}
              <div className="flex gap-[90px]">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="font-text-small-semi-bold font-[number:var(--text-small-semi-bold-font-weight)] text-[#c2c19f] text-[length:var(--text-small-semi-bold-font-size)] tracking-[var(--text-small-semi-bold-letter-spacing)] leading-[var(--text-small-semi-bold-line-height)] whitespace-nowrap [font-style:var(--text-small-semi-bold-font-style)]"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Subscribe section */}
            <div className="w-[400px]">
              <h3 className="font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-[#c2c19f] text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                Subscribe
              </h3>

              <div className="flex flex-col gap-3 mt-10">
                <div className="flex gap-4">
                  <Input
                    className="flex-1 p-3 bg-transparent text-[#c2c19f] border-[#c2c19f] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
                    placeholder="Enter your email"
                  />
                  <Button
                    variant="outline"
                    className="px-6 py-3 border-[#c2c19f] text-[#c2c19f] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
                  >
                    Subscribe
                  </Button>
                </div>
                <p className="text-[#c2c19f] font-text-tiny-normal font-[number:var(--text-tiny-normal-font-weight)] text-[length:var(--text-tiny-normal-font-size)] tracking-[var(--text-tiny-normal-letter-spacing)] leading-[var(--text-tiny-normal-line-height)] [font-style:var(--text-tiny-normal-font-style)]">
                  By subscribing you agree to our Privacy Policy
                </p>
              </div>
            </div>
          </div>

          {/* Footer bottom section */}
          <div className="flex flex-col gap-8">
            <Separator className="bg-[#c2c19f] opacity-50 h-px" />

            <div className="flex justify-between">
              {/* Footer links */}
              <div className="flex gap-6">
                {footerLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="font-text-small-link font-[number:var(--text-small-link-font-weight)] text-[#c2c19f] text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline whitespace-nowrap [font-style:var(--text-small-link-font-style)]"
                  >
                    {link.title}
                  </a>
                ))}
              </div>

              {/* Copyright */}
              <div className="font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-[#c2c19f] text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] whitespace-nowrap [font-style:var(--text-small-normal-font-style)]">
                © 2025 oneONedu. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
