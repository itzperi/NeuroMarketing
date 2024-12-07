import { Button, Heading } from "../../components";
import React from "react";

export default function TrustedMarketingSection() {
  return (
    <>
      <div className="mt-[4.75rem] self-stretch">
        <div className="flex justify-center bg-[#f3f1fb] p-[2.00rem] sm:p-[1.00rem]">
          <div className="mx-auto mt-[0.63rem] flex w-full max-w-[75.50rem] items-center justify-center md:flex-col">
            <div className="relative h-[36.00rem] w-[48%] md:w-full">
              <div className="absolute left-[8.88rem] top-[8.00rem] m-auto h-[28.50rem] w-[80%] bg-[#797979]" />
              <div className="absolute bottom-[-0.06rem] right-[5%] m-auto h-[17.63rem] w-[64%] border-[11px] border-solid border-[#ffffff] bg-[#4b4b4b] shadow-[8_4px_25px_0_#0000003f]" />
            </div>
            <div className="flex flex-1 flex-col items-start gap-[3.88rem] px-[1.13rem] md:self-stretch sm:gap-[1.94rem]">
              <div className="ml-[8.88rem] flex flex-col gap-[5.38rem] self-stretch lg:gap-[5.38rem] md:ml-0 md:gap-[4.00rem] sm:gap-[2.69rem]">
                <Heading
                  size="headinglg"
                  as="h2"
                  className="text-[1.88rem] font-bold leading-[161%] tracking-[0.00rem] text-[#111111] lg:text-[1.56rem] md:text-[1.50rem] sm:text-[1.38rem]"
                >
                  Trusted Marketing Agency for Industry Leaders and Startup Brands
                </Heading>
                <Heading
                  size="texted"
                  as="h3"
                  className="font-['Inter'] text-[1.06rem] font-medium leading-[196%] tracking-[0.00rem] text-[#222529] lg:text-[0.88rem]"
                >
                  Stramasa represents an international collective of specialized agencies and consulting companies offering strategic digital transformation and marketing services, business consulting, market research, IT solutions, and focused industry experience to help unlock your company's potential and achieve remarkable growth.
                </Heading>
              </div>
              <Button
                shape="round"
                className="min-w-[28.50rem] rounded-lg px-[1.75rem] font-['Inter'] font-semibold tracking-[0.08rem] md:ml-0 sm:px-[1.0rem]"
              >
                Discover Our Success Stories &gt;
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
