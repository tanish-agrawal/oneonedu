import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";

export const TestimonialSection = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      name: "Name Surname",
      position: "Position, Company name",
      avatar: "/avatar-image-5.png",
    },
    {
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."',
      name: "Name Surname",
      position: "Position, Company name",
      avatar: "/avatar-image-5.png",
    },
    {
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."',
      name: "Name Surname",
      position: "Position, Company name",
      avatar: "/avatar-image-5.png",
    },
    {
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      name: "Name Surname",
      position: "Position, Company name",
      avatar: "/avatar-image-5.png",
    },
    {
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      name: "Name Surname",
      position: "Position, Company name",
      avatar: "/avatar-image-5.png",
    },
    {
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      name: "Name Surname",
      position: "Position, Company name",
      avatar: "/avatar-image-5.png",
    },
  ];

  // Group testimonials into columns
  const columns = [
    testimonials.slice(0, 2),
    testimonials.slice(2, 4),
    testimonials.slice(4, 6),
  ];

  return (
    <section className="w-full flex flex-col items-center gap-20 py-12 px-16 [background:linear-gradient(180deg,rgba(132,172,98,1)_0%,rgba(132,172,98,1)_75%,rgba(194,193,159,1)_100%)]">
      <div className="flex flex-col items-center gap-6 max-w-[560px]">
        <h2 className="font-heading-desktop-h2 font-[number:var(--heading-desktop-h2-font-weight)] text-[#092315] text-[length:var(--heading-desktop-h2-font-size)] text-center tracking-[var(--heading-desktop-h2-letter-spacing)] leading-[var(--heading-desktop-h2-line-height)] [font-style:var(--heading-desktop-h2-font-style)]">
          Student Testimonials 🚀
        </h2>

        <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#092315] text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
          Dedicated tutors committed to your academic success.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {columns.map((column, colIndex) => (
          <div key={`column-${colIndex}`} className="flex flex-col gap-8">
            {column.map((testimonial, index) => (
              <Card
                key={`testimonial-${colIndex}-${index}`}
                className="bg-[#092315] border border-solid border-[#c2c19f] p-0"
              >
                <CardContent className="p-8 flex flex-col gap-6">
                  <div className="flex flex-col gap-6">
                    <img className="h-auto" alt="Stars" src="/stars.svg" />
                    <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#c2c19f] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                      {testimonial.text}
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="p-8 pt-0">
                  <div className="flex items-center gap-4 w-full">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.avatar} alt="Avatar" />
                      <AvatarFallback>NA</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <p className="font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-[#c2c19f] text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                        {testimonial.name}
                      </p>
                      <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#c2c19f] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
