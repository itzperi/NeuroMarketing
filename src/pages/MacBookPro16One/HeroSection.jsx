import { Button, Heading } from "../../components";
import React from "react";

export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <div className="self-stretch">
        <div className="flex flex-col items-start justify-center gap-[2.75rem] bg-[#333333] py-[8.00rem] pl-[11.38rem] pr-[3.50rem] lg:py-[2.00rem] lg:px-[2.00rem] md:p-[1.25rem] sm:p-[1.00rem]">
          <Heading
            size="text3x1"
            as="h1"
            className="text-[3.75rem] font-medium leading-[123%] tracking-[0.00rem] text-[#ffffff] lg:text-[3.19rem] md:text-[2.5rem] sm:text-[2.13rem]"
          >
            <span>
              Improve marketing
              <br />
              with&nbsp;
            </span>
            <span className="font-bold uppercase">
              neuromarketing
              <br />
              insights
            </span>
          </Heading>
          <Heading
            size="text2x1"
            as="h2"
            className="w-[46%] text-[1.50rem] font-medium leading-[123%] tracking-[6.00rem] text-[#ffffff] lg:w-full lg:text-[1.25rem] md:w-full"
          >
            We&#39;re the market research agency that studies the brain to enhance the impact of your marketing efforts.
          </Heading>
          <Button
            shape="round"
            className="min-w-[19.75rem] rounded-lg px-[2.13rem] font-['Inter'] font-semibold tracking-[0.08rem] sm:px-[1.08rem]"
          >
            Know More &gt;
          </Button>
        </div>
      </div>
    </>
  );
}
