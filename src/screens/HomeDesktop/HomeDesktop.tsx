import React from "react";
import { ContentWrapperSection } from "./sections/ContentWrapperSection/ContentWrapperSection";
import { FaqSection } from "./sections/FaqSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NavbarSection } from "./sections/NavbarSection";
import { StatsSection } from "./sections/StatsSection/StatsSection";
import { TestimonialSection } from "./sections/TestimonialSection/TestimonialSection";

export const HomeDesktop = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full">
      <NavbarSection />
      <HeaderSection />
      <MainContentSection />
      <StatsSection />
      <ContentWrapperSection />
      <TestimonialSection />
      <FaqSection />
      <FooterSection />
    </main>
  );
};
