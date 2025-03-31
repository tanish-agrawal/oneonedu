import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Program data for mapping
const programData = [
  {
    id: 1,
    title: "Medium length section heading goes here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    ctaText: "Sign Up",
    iconSrc: "/icon---relume.svg",
  },
  {
    id: 2,
    title: "Medium length section heading goes here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    ctaText: "Learn More",
    iconSrc: "/icon---relume.svg",
  },
  {
    id: 3,
    title: "Medium length section heading goes here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    ctaText: "Start",
    iconSrc: "/icon---relume.svg",
  },
  {
    id: 4,
    title: "Medium length section heading goes here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    ctaText: "Button",
    iconSrc: "/icon---relume.svg",
  },
];

export const ContentWrapperSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 [background:linear-gradient(0deg,rgba(132,172,98,1)_0%,rgba(132,172,98,1)_74%,rgba(194,193,159,1)_100%)]">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center md:text-left">
          <h2 className="font-heading-desktop-h3 font-[number:var(--heading-desktop-h3-font-weight)] text-black text-[length:var(--heading-desktop-h3-font-size)] tracking-[var(--heading-desktop-h3-letter-spacing)] leading-[var(--heading-desktop-h3-line-height)] [font-style:var(--heading-desktop-h3-font-style)]">
            Programs
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programData.map((program) => (
            <Card
              key={program.id}
              className="bg-transparent border-none shadow-none"
            >
              <CardContent className="p-0 flex flex-col gap-8">
                <div className="flex flex-col gap-6">
                  <img
                    className="w-12 h-12"
                    alt="Icon relume"
                    src={program.iconSrc}
                  />

                  <div className="flex flex-col gap-4">
                    <h3 className="font-heading-desktop-h5 font-[number:var(--heading-desktop-h5-font-weight)] text-black text-[length:var(--heading-desktop-h5-font-size)] tracking-[var(--heading-desktop-h5-letter-spacing)] leading-[var(--heading-desktop-h5-line-height)] [font-style:var(--heading-desktop-h5-font-style)]">
                      {program.title}
                    </h3>

                    <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                      {program.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] whitespace-nowrap [font-style:var(--text-regular-normal-font-style)]">
                      {program.ctaText}
                    </span>
                    <ChevronRightIcon className="w-6 h-6" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
