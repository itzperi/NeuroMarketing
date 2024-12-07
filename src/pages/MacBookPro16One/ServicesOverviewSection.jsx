import DigitalMarketingProfile from "../../components/DigitalMarketingProfile";
import React, { Suspense } from "react";

const marketingAgencyList = [
  {
    agencyTitle: "Digital Marketing Agency",
    agencyDescription: (
      <>
        Our digital marketing agency offers
        <br />
        full-service strategic solutions and industry-focused expertise.
      </>
    ),
  },
  {
    agencyTitle: "Digital Marketing Agency",
    agencyDescription: (
      <>
        Our digital marketing agency offers
        <br />
        full-service strategic solutions and industry-focused expertise.
      </>
    ),
  },
  {
    agencyTitle: "Digital Marketing Agency",
    agencyDescription: (
      <>
        Our digital marketing agency offers
        <br />
        full-service strategic solutions and industry-focused expertise.
      </>
    ),
  },
];

export default function ServicesOverviewSection() {
  return (
    <>
      {/* Services Overview Section */}
      <div className="x-auto mt-[4.5rem] flex w-full max-w-[68.38rem] gap-[2.25rem] self-stretch lg:px-[1.25rem] md:flex-col md:px-[1.25rem]">
        <Suspense fallback={<div>Loading feed...</div>}>
          {marketingAgencyList.map((d, index) => (
            <DigitalMarketingProfile {...d} key={"thumbsUpList" + index} className="w-[34%] hover:shadow-[0_12px_25px_0_#0000003f] md:w-full" />
          ))}
        </Suspense>
      </div>
    </>
  );
}
