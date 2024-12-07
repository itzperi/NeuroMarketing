import { Heading } from "./..";
import React from "react";

export default function DigitalMarketingProfile({
  agencyTitle = "Digital Marketing Agency",
  agencyDescription = "<>Our digital marketing agency offers<br />full-service strategic solutions and industry-focused expertise.</>",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center cursor-pointer hover:shadow-[8px_12px_25px_8px_#00000034]`}
    >
      <div className="flex flex-1 flex-col gap-[8.75rem]">
        <div className="mx-[1.00rem] flex flex-col items-start gap-[1.63rem]">
          <div className="ml-[5.13rem] flex flex-col items-center rounded-[36px] bg-[#ffffff] p-[8.88rem] shadow-[0_4px_25px_0_#0000003f]">
            <img
              src="images/img_thumbs_up.svg"
              alt="Thumbs Up Image"
              className="h-[2.75rem]"
            />
          </div>
          <Heading
            size="headinged"
            as="h3"
            className="font-['Inter'] text-[1.25rem] font-semibold tracking-[0.00rem] text-[#000000]"
          >
            {agencyTitle}
          </Heading>
        </div>
        <Heading
          size="text"
          as="p"
          className="text-center font-['Inter'] text-[0.88rem] font-medium leading-[158%] tracking-[0.00rem] text-[#555555]"
        >
          {agencyDescription}
        </Heading>
      </div>
      <div className="h-[17.63rem] w-[8.86rem] rounded-[50%] bg-[#a7a7a7]" />
    </div>
  );
}
