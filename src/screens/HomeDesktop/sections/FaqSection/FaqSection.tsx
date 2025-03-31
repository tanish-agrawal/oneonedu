import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";

export const FaqSection = (): JSX.Element => {
  // FAQ data for the left column
  const leftFaqItems = [
    {
      question: "What subjects are offered?",
      answer:
        "We offer a wide range of subjects including Mathematics, Science, English, and more. Our tutors are experienced in teaching high school curricula. You can choose subjects based on your academic needs.",
    },
    {
      question: "How do I enroll?",
      answer:
        "Enrollment is simple! Just visit our website and fill out the registration form. Once submitted, our team will contact you to finalize your schedule.",
    },
    {
      question: "Are the classes online?",
      answer:
        "Yes, all our classes are conducted online. This allows for flexible scheduling and the comfort of learning from home. You will need a stable internet connection and a device to participate.",
    },
    {
      question: "What is the duration?",
      answer:
        "Each session typically lasts for one hour. However, you can choose longer sessions if needed. Our tutors will work with you to create a schedule that fits your learning pace.",
    },
    {
      question: "Can I change tutors?",
      answer:
        "Absolutely! If you feel that a different tutor would better suit your learning style, you can request a change. We want to ensure you have the best possible experience.",
    },
  ];

  // FAQ data for the right column
  const rightFaqItems = [
    {
      question: "What is the cost?",
      answer:
        "Our pricing varies based on the subject and duration of the classes. We offer competitive rates and occasional discounts. For detailed pricing, please contact us.",
    },
    {
      question: "Are materials provided?",
      answer:
        "Yes, we provide all necessary learning materials for your courses. This includes worksheets, practice tests, and access to online resources. Our goal is to support your learning journey effectively.",
    },
    {
      question: "What if I miss a class?",
      answer:
        "If you miss a class, please notify your tutor as soon as possible. We can arrange a makeup session to cover the missed material. Consistency is key, and we're here to help you stay on track.",
    },
    {
      question: "How can I pay?",
      answer:
        "We accept various payment methods including credit cards, UPI, and bank transfers. Payment details will be provided during the enrollment process. Your security is our priority.",
    },
    {
      question: "Is there a trial?",
      answer:
        "Yes, we offer a trial class for new students. This allows you to experience our teaching style and see if it's a good fit. Contact us to schedule your trial session.",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-20 px-16 py-[90px] bg-[#c2c19f]">
      {/* Header */}
      <div className="flex flex-col items-center gap-6 max-w-[768px] w-full">
        <h2 className="font-heading-desktop-h2 font-[number:var(--heading-desktop-h2-font-weight)] text-[#092315] text-[length:var(--heading-desktop-h2-font-size)] text-center tracking-[var(--heading-desktop-h2-letter-spacing)] leading-[var(--heading-desktop-h2-line-height)] [font-style:var(--heading-desktop-h2-font-style)]">
          FAQs
        </h2>
        <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#092315] text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
          Find answers to common questions about our one-on-one tuition classes
          for grades 6 to 12.
        </p>
      </div>

      {/* FAQ Accordion Grid */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-[1312px]">
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          {leftFaqItems.map((item, index) => (
            <Accordion type="single" collapsible key={`left-faq-${index}`}>
              <AccordionItem
                value={`left-item-${index}`}
                className="bg-[#84ac62] border border-solid border-[#092315]"
              >
                <AccordionTrigger className="px-6 py-5 font-text-medium-bold font-[number:var(--text-medium-bold-font-weight)] text-[#092315] text-[length:var(--text-medium-bold-font-size)] tracking-[var(--text-medium-bold-letter-spacing)] leading-[var(--text-medium-bold-line-height)] [font-style:var(--text-medium-bold-font-style)]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0 font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#092315] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          {rightFaqItems.map((item, index) => (
            <Accordion type="single" collapsible key={`right-faq-${index}`}>
              <AccordionItem
                value={`right-item-${index}`}
                className="bg-[#84ac62] border border-solid border-[#092315]"
              >
                <AccordionTrigger className="px-6 py-5 font-text-medium-bold font-[number:var(--text-medium-bold-font-weight)] text-[#092315] text-[length:var(--text-medium-bold-font-size)] tracking-[var(--text-medium-bold-letter-spacing)] leading-[var(--text-medium-bold-line-height)] [font-style:var(--text-medium-bold-font-style)]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0 font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#092315] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col items-center gap-6 max-w-[560px] w-full">
        <div className="flex flex-col items-center gap-4 w-full">
          <h4 className="text-[length:var(--heading-desktop-h4-font-size)] text-center leading-[var(--heading-desktop-h4-line-height)] font-heading-desktop-h4 font-[number:var(--heading-desktop-h4-font-weight)] text-[#092315] tracking-[var(--heading-desktop-h4-letter-spacing)] [font-style:var(--heading-desktop-h4-font-style)]">
            Still have questions?
          </h4>
          <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#092315] text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
            Reach out to us anytime!
          </p>
        </div>
        <Button
          variant="outline"
          className="px-6 py-3 border border-solid border-[#092315] rounded-none bg-transparent hover:bg-[#84ac62] transition-colors"
        >
          <span className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#092315] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
            Contact
          </span>
        </Button>
      </div>
    </section>
  );
};
