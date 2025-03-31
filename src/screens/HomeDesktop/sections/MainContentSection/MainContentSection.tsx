import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

// Feature data for the four feature boxes
const features = [
  {
    id: 1,
    title: "Excellent Faculty",
    description:
      "1:1 LIVE Classes with Expert Tutors / Excellent faculty, latest curriculum and contemporary teaching methodolog",
    icon: "/frame.svg",
    iconSize: "w-[60px] h-[60px]",
    position: "top-0 left-0",
  },
  {
    id: 2,
    title: "Tailored Structure",
    description:
      "Flexible Timings, Personalised Study Plans / After – school tuitions assuring convenience and flexibility",
    icon: "/structure-1.svg",
    iconSize: "w-[50px] h-[50px]",
    position: "top-[231px] left-0",
  },
  {
    id: 3,
    title: "Continuous Monitoring",
    description:
      "Timely PTM, periodical assessments and tests, reviews and performance monitoring",
    icon: "/group.png",
    iconSize: "w-11 h-11",
    position: "top-0 left-[904px]",
  },
  {
    id: 4,
    title: "Doubt Clearing Sessions",
    description:
      "Dedicated doubt clearing sessions and activities for student's participation",
    icon: "/vector-2.svg",
    iconSize: "w-[50px] h-[50px]",
    position: "top-[234px] left-[904px]",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="py-16 bg-gradient-to-t from-[rgba(132,172,98,1)] via-[rgba(132,172,98,1)] to-[rgba(194,193,159,1)] w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 mb-12">
          <h2 className="font-['Roboto',Helvetica] font-bold text-[#092315] text-5xl text-center tracking-[0] leading-[57.6px]">
            Medium length section heading goes here
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-8 relative">
          {/* Left features */}
          <div className="flex flex-col space-y-10">
            <FeatureCard feature={features[0]} />
            <FeatureCard feature={features[1]} />
          </div>

          {/* Center form */}
          <Card className="bg-[#092315] rounded-[20px] text-[#c2c19f] p-4">
            <CardContent className="p-0">
              <div className="text-center mb-6">
                <h3 className="text-3xl">
                  <span className="font-medium text-[#c2c19f]">Book Your</span>
                  <span className="font-bold text-[#c2c19f]"> FREE DEMO</span>
                </h3>
              </div>

              <div className="space-y-4">
                <div className="border-b border-[#c2c19f] pb-1">
                  <Input
                    className="bg-transparent border-0 text-[#c2c19f] placeholder:text-[#c2c19f] focus-visible:ring-0 p-0"
                    placeholder="*Name"
                  />
                </div>

                <div className="border-b border-[#c2c19f] pb-1">
                  <Input
                    className="bg-transparent border-0 text-[#c2c19f] placeholder:text-[#c2c19f] focus-visible:ring-0 p-0"
                    placeholder="*Email"
                  />
                </div>

                <div className="flex gap-4">
                  <div className="border-b border-[#c2c19f] pb-1 flex-1">
                    <Input
                      className="bg-transparent border-0 text-[#c2c19f] placeholder:text-[#c2c19f] focus-visible:ring-0 p-0"
                      placeholder="Mobile Number"
                    />
                  </div>

                  <div className="border-b border-[#c2c19f] pb-1 flex-1">
                    <Select>
                      <SelectTrigger className="bg-transparent border-0 text-[#c2c19f] focus:ring-0 p-0 h-auto">
                        <SelectValue placeholder="Board" />
                      </SelectTrigger>
                    </Select>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="border-b border-[#c2c19f] pb-1 flex-1">
                    <Input
                      className="bg-transparent border-0 text-[#c2c19f] placeholder:text-[#c2c19f] focus-visible:ring-0 p-0"
                      placeholder="*City Name"
                    />
                  </div>

                  <div className="border-b border-[#c2c19f] pb-1 flex-1">
                    <Select>
                      <SelectTrigger className="bg-transparent border-0 text-[#c2c19f] focus:ring-0 p-0 h-auto">
                        <SelectValue placeholder="Grade" />
                      </SelectTrigger>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <Checkbox
                    id="terms"
                    className="w-3.5 h-3.5 rounded-[5px] border-[#c2c19f] data-[state=checked]:bg-[#c2c19f]"
                  />
                  <label
                    htmlFor="terms"
                    className="text-xs font-medium text-[#c2c19f]"
                  >
                    Terms &amp; Conditions
                  </label>
                </div>

                <Button className="bg-[#c2c19f] text-[#092315] font-semibold rounded-full h-9 px-4 w-[180px]">
                  Book Your FREE DEMO
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Right features */}
          <div className="flex flex-col space-y-10">
            <FeatureCard feature={features[2]} />
            <FeatureCard feature={features[3]} />
          </div>
        </div>
      </div>
    </section>
  );
};

// Feature card component for reusability
const FeatureCard = ({ feature }: { feature: (typeof features)[0] }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-3 flex justify-center">
        <img
          className={feature.iconSize}
          alt={feature.title}
          src={feature.icon}
        />
      </div>
      <div className="flex flex-col items-center gap-4 text-center">
        <h3 className="text-[length:var(--heading-desktop-h5-font-size)] leading-[var(--heading-desktop-h5-line-height)] font-heading-desktop-h5 font-[number:var(--heading-desktop-h5-font-weight)] text-[#092315] tracking-[var(--heading-desktop-h5-letter-spacing)]">
          {feature.title}
        </h3>
        <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#092315] text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)]">
          {feature.description}
        </p>
      </div>
    </div>
  );
};
