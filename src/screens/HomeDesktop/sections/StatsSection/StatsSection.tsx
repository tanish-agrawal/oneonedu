import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const StatsSection = (): JSX.Element => {
  // Data for statistics to enable mapping
  const stats = [
    { number: "600+", description: "Happy Students" },
    { number: "1200+", description: "Learning Classes" },
    { number: "30+", description: "Experienced Tutors" },
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-t from-[rgba(194,193,159,1)] to-[rgba(132,172,98,1)]">
      <div className="container mx-auto">
        <h2 className="text-center mb-16 text-[40px] font-bold font-heading-desktop-h3 text-[#092315] leading-[120%]">
          Trusted by Parents. Preferred by Students. Loved by All.
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="w-[416px] border-none bg-transparent">
              <CardContent className="flex flex-col items-center justify-center p-8 gap-2">
                <p className="font-bold text-[80px] text-[#092315] text-center leading-[96px] font-['Roboto',Helvetica] mt-[-1px]">
                  {stat.number}
                </p>
                <p className="font-heading-desktop-h6 font-[number:var(--heading-desktop-h6-font-weight)] text-[#092315] text-[length:var(--heading-desktop-h6-font-size)] text-center tracking-[var(--heading-desktop-h6-letter-spacing)] leading-[var(--heading-desktop-h6-line-height)] [font-style:var(--heading-desktop-h6-font-style)]">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
