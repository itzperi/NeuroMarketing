import { Heading, Ing } from "../../components";
import MarketingStrategyRow from "../../components/MarketingStrategyRow";
import React, { Suspense } from "react";

const strategyGrid = [
  { marketingImage: "images/img_strategy_1.svg", marketingText: "Marketing Strategy" },
  { marketingImage: "images/img_campaign_1.svg", marketingText: "Advertising" },
  { marketingImage: "images/img_promotion_1.svg", marketingText: "Marketing" },
  { marketingImage: "images/img_profit.svg", marketingText: "Coaching & Sales" },
  { marketingImage: "images/ing_cut.svg", marketingText: "Design" },
  { marketingImage: "images/img_website_1.svg", marketingText: "Websites" },
  { marketingImage: "images/ing_monitor_1.svg", marketingText: "Data & Analysis" },
  { marketingImage: "images/img_message_1.svg", marketingText: "Communications" },
  { marketingImage: "images/img_customer_service.svg", marketingText: "Services" },
];

export default function FullServiceAgencySection() {
  return (
    <>
      {/* Full Service Agency Section */}
      <div className="relative mt-[1.88rem] h-[23.50rem] content-center self-stretch px-[15.50rem] lg:h-auto lg:px-[2.00rem] md:h-auto md:px-[1.25rem] sm:px-[1.0rem]">
        <div className="flex w-full max-w-[176.88rem] flex-1 flex-col items-center gap-[1.5rem]">
          <Heading
            size="heading"
            as="h2"
            className="text-[1.88rem] font-bold tracking-[0.00rem] text-[#111111] lg:text-[1.56rem] md:text-[1.50rem] sm:text-[1.38rem]"
          >
            We Are A Full-Service Agency Offering Strategic Marketing Services
          </Heading>
          <div className="grid grid-cols-3 justify-center gap-[4rem] self-stretch lg:grid-cols-3 md:ml-e md:grid-cols-2 sm:grid-cols-1">
            <Suspense fallback={<div>Loading feed...</div>}>
              {strategyGrid.map((d, index) => (
                <MarketingStrategyRow {...d} key={"marketingGrid" + index} />
              ))}
            </Suspense>
          </div>
        </div>
        <Img
          src="images/img_15410_converted.svg"
          alt="Vector Image"
          className="absolute left-[18%] top-[1.63rem] z-10 m-auto h-[18.00rem] w-[48%] object-contain"
        />
      </div>
    </>
  );
}
