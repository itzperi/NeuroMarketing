import { Helmet } from "react-helmet";
import { Heading, Button, Img, Text, Slider } from "../../components";
import Header from "../../components/Header";
import ContactFormSection from "./ContactFormSection";
import FullServiceAgencySection from "./FullServiceAgencySection";
import HeroSection from "./HeroSection";
import ServicesOverviewSection from "./ServicesOverviewSection";
import TrustedMarketingSection from "./TrustedMarketingSection";
import React from "react";

export default function MacBookPro160nePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>Digital Marketing Agency Services Stramasa</title>
        <meta
          name="description"
          content="Stramasa, trusted marketing agency, offers strategic solutions in digital marketing, business consulting, and executive search. Discover our success stories and remarkable growth."
        />
      </Helmet>

      <div className="w-full bg-[#ffffff]">
        <Header />
        <div className="mb-[0.25rem] flex flex-col items-center">
          {/* Hero Section */}
          <HeroSection />
          {/* Services Overview Section */}
          <ServicesOverviewSection />
          {/* Trusted Marketing Section */}
          <TrustedMarketingSection />
          {/* Full Service Agency Section */}
          <FullServiceAgencySection />
          {/* Contact Form Section */}
          <ContactFormSection />

          <div className="relative mx-auto mt-[2.75rem] h-[46.00rem] w-full max-w-[101.63rem] content-end self-stretch lg:h-auto lg:px-[1.25rem] md:h-auto md:px-[1.25rem]">
            <div className="relative mx-auto mb-[7.13rem] h-[19.38rem] w-full content-center lg:h-auto md:h-auto">
              <div className="mx-auto flex w-full gap-[42.50rem] px-[2.13rem] lg:mx-0 md:mx-0 md:flex-col md:gap-[1.25rem] sm:px-[1.00rem]">
                <Slider
                  autoPlay
                  autoPlayInterval={2008}
                  className="w-[8.50rem] rounded-[34px] border border-solid border-[#alalal] px-[1.13rem]"
                >
                  <Button
                    color="white"
                    size="lg"
                    shape="circle"
                    onClick={() => {
                      sliderRef?.current?.slideNext();
                    }}
                    className="w-[4.25rem] self-end rounded-[34px] border border-solid border-[#alalal] px-[1.25rem]"
                  >
                    <Img src="images/img_right_arrow_5.svg" />
                  </Button>
                  <Button
                    color="white"
                    size="lg"
                    shape="circle"
                    onClick={() => {
                      sliderRef?.current?.slidePrev();
                    }}
                    className="w-[4.25rem] self-end rounded-[34px] border border-solid border-[#alalal] px-[1.25rem]"
                  >
                    <Img src="images/img_right_arrow_3.svg" />
                  </Button>
                </Slider>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 top-auto flex h-max flex-1 justify-center px-[3.00rem] md:px-[1.25rem] sm:px-[1.00rem]">
              <div className="flex w-[52%] flex-col gap-[2.00rem] lg:w-full md:w-full">
                <div className="mx-[1.75rem] flex flex-col items-start md:mx-8">
                  <Heading
                    size="headingx1"
                    as="h1"
                    className="self-center text-[2.5rem] font-bold tracking-[8.88rem] text-[#4d57e1] lg:text-[2.13rem] md:text-[2.13rem] sm:text-[2.88rem]"
                  >
                    Latest Blog Posts
                  </Heading>
                  <Heading
                    size="text2x1"
                    as="h2"
                    className="relative mt-[-8.63rem] self-stretch text-center font-['Inter'] text-[1.5rem] font-medium leading-[149%] tracking-[0.00rem] text-[#666666] lg:text-[1.0rem]"
                  >
                    Remarkable growth through AI solutions and focused industry experience to help unlock your company's potential.
                  </Heading>
                </div>
                <div className="flex flex-col gap-[0.25rem] rounded-[10px] border border-solid border-[#4d57e1] bg-[#4d57e1] md:mr-0">
                  <div className="h-[21.88rem] rounded-[16px] border-[9px] border-solid border-[#4d57e1] bg-[#b6b6b6]" />
                  <div className="ml-[3.38rem] mr-[2.25rem] flex flex-col items-center gap-[0.75rem] md:mx-8">
                    <Heading
                      size="headinglg"
                      as="h6"
                      className="text-[1.25rem] font-bold tracking-[1.88rem] text-[#ffffff] lg:text-[1.56rem] md:text-[1.38rem] sm:text-[1.00rem]"
                    >
                      Lorem Ipsum
                    </Heading>
                    <Heading
                      size="textmd"
                      as="p"
                      className="self-stretch text-center font-['Inter'] text-[0.56rem] font-medium leading-[149%] tracking-[0.0rem] text-[#282828]"
                    >
                      Stramasa represents an international collective of specialized agencies and consulting companies offering strategic digital transformation and marketing services, business consulting, market research, AI solutions, and focused industry experience to help unlock your company's potential and achieve remarkable growth.
                    </Heading>
                  </div>
                </div>
              </div>

              <div className="absolute left-0 right-0 top-[29%] mx-auto flex flex-1 items-start justify-between gap-[1.25rem]">
                <Button
                  color="white"
                  size="lg"
                  shape="circle"
                  onClick={() => {
                    sliderRef?.current?.slidePrev();
                  }}
                  className="w-[4.25rem] self-end rounded-[34px] border border-solid border-[#alalal] px-[1.25rem]"
                >
                  <Img src="images/img_right_arrow_3.svg" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

