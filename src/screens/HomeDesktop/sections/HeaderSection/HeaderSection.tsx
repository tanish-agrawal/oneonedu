import { PhoneCallIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeaderSection = (): JSX.Element => {
  return (
    <section
      className="relative w-full h-[700px] flex items-center px-16 py-0 bg-cover bg-center"
      style={{ backgroundImage: "url(..//header---5--.png)" }}
    >
      <Card className="relative w-[600px] bg-[#ffffff4c] rounded-[20px] border-[3px] border-solid border-[#ffffff66] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]">
        <CardContent className="p-6">
          <div className="space-y-6">
            <h1 className="font-['Roboto',Helvetica] font-bold text-[#092315] text-[56px] leading-[67.2px]">
              Personalized Tutoring for Your Academic Success
            </h1>

            <p className="font-text-medium-normal text-[#092315] text-[length:var(--text-medium-normal-font-size)] leading-[var(--text-medium-normal-line-height)]">
              Experience tailored learning with our expert tutors who focus on
              your unique needs. Achieve your academic goals and build
              confidence through one-on-one sessions.
            </p>

            <Button className="bg-[#092315] text-[#c2c19f] rounded-[50px] h-12 px-4 flex items-center">
              <span className="font-['Roboto',Helvetica] font-semibold text-xl">
                Request a Call Back
              </span>
              <PhoneCallIcon className="w-10 h-10 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
