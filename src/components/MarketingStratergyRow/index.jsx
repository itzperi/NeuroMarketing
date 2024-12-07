import { Heading, Img } from "components"; 
import React from "react";

export default function MarketingStrategyRow({
  marketingImage = "images/ing_strategy_1.svg",
  marketingText = "Marketing Strategy",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center w-full`}
    >
      <div className="flex w-full items-center">
        <div className="relative z-[1] mb-[8.38rem] flex h-[3.38rem] w-[18%] items-center self-end rounded-[18px] bg-[url(/public/images/img_group_20.svg)] bg-cover bg-no-repeat px-[0.63rem] py-[0.50rem]">
          <img
            src={marketingImage}
            alt="Strategy Image"
            className="h-[2.25rem]"
          />
        </div>
        <div className="relative ml-[-4.13rem] flex h-[4.75rem] flex-1 items-center justify-center rounded-[18px] bg-[url(/public/images/img_group_19.svg)] bg-cover bg-no-repeat px-[2.63rem] py-[1.25rem] md:px-[1.25rem]">
          <Heading
            size="text-xl"
            as="p"
            className="text-[1.38rem] font-medium tracking-[8.0rem] text-[#eeeeee]"
          >
            {marketingText}
          </Heading>
        </div>
      </div>
    </div>
  );
}
