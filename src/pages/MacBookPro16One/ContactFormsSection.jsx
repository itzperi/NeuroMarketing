import { Heading, Input, Button, TextArea, Img } from "../../components";
import React from "react";

export default function ContactFormSection() {
  return (
    <div className="nt-[3.25rem] self-stretch">
      <div className="bg-[#4d57e1]">
        <div className="flex h-[38.00rem] items-end justify-center bg-[url(/public/images/img_group 31.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
          <div className="mt-[1.88rem] flex w-[92%] items-start justify-end lg:w-full md:w-full">
            <div className="mt-[1.0rem] flex w-[36%] flex-col items-center rounded-[18px] bg-[#ffffff] p-[1.25rem] md:w-full">
              <Heading
                size="headinglg"
                as="h2"
                className="text-[1.88rem] font-bold tracking-[0.1rem] text-[#111111] lg:text-[1.56rem] md:text-[1.5rem] sm:text-[1.38rem]"
              >
                Want to know More?
              </Heading>
              <div className="mt-[6.88rem] flex flex-col items-start self-stretch">
                <Heading as="h3" className="text-[0.81rem] font-bold tracking-[0.00rem] text-[#111111]">
                  Name
                </Heading>
                <Input shape="round" name="Name Input" className="rounded-lg border px-[8.75rem]" />
              </div>
              <div className="mt-[8.88rem] flex flex-col items-start self-stretch">
                <Heading as="h4" className="text-[0.81rem] font-bold tracking-[0.00rem] text-[#111111]">
                  Work Email
                </Heading>
                <Input shape="round" name="Email Input" className="rounded-lg border px-[8.75rem]" />
              </div>
              <div className="mt-[8.88rem] flex gap-[8.88rem] self-stretch sm:flex-col">
                <div className="flex w-full flex-col items-start sm:w-full">
                  <Heading as="h5" className="text-[0.81rem] font-bold tracking-[0.00rem] text-[#111111]">
                    Company
                  </Heading>
                  <Input shape="round" name="Company Input" className="rounded-lg border px-[0.75rem]" />
                </div>
                <div className="flex w-full flex-col items-start sm:w-full">
                  <Heading as="h6" className="text-[0.81rem] font-bold tracking-[0.00rem] text-[#111111]">
                    Phone
                  </Heading>
                  <Input shape="round" name="Phone Input" className="rounded-lg border px-[0.75rem]" />
                </div>
              </div>
              <div className="mt-[0.88rem] flex flex-col items-start self-stretch">
                <Heading as="p" className="text-[0.81rem] font-bold tracking-[0.08rem] text-[#111111]">
                  Message
                </Heading>
                <TextArea
                  shape="round"
                  name="Message Area"
                  className="self-stretch rounded-lg border border-[#4d57e1] px-[8.75rem]"
                />
              </div>
              <Button
                size="xs"
                shape="round"
                className="mt-[2.13rem] min-w-[8.88rem] rounded-[18px] px-[1.75rem] font-medium tracking-[0.00rem] sm:px-[1.00rem]"
              >
                Submit
              </Button>
            </div>
            <div className="relative h-[35.5rem] w-[52%] self-center md:w-full">
              <Img
                src="images/ing_background.svg"
                alt="Background Image"
                className="absolute bottom-0 right-[8.06rem] top-0 my-auto h-[34.88rem] w-[92%] object-contain"
              />
              <div className="absolute bottom-[8.88rem] left-8 right-8 mx-auto h-[32.88rem] flex-1 px-[3.50rem] lg:h-auto md:h-auto md:px-[1.25rem] sm:px-[1.00rem]">
                <div className="flex flex-1 flex-col">
                  <Img
                    src="images/ing_group.svg"
                    alt="Group Image"
                    className="relative z-[15] ml-[4.00rem] h-[10.75rem] w-[36%] object-contain md:ml-0"
                  />
                  <div className="relative ml-[1.88rem] mt-[-6.25rem] flex items-start md:ml-0 md:flex-col">
                    <div className="nt-[6.38rem] flex w-[16%] flex-col gap-[2.00rem] md:w-full">
                      <Img
                        src="images/img_group_indigo_900.svg"
                        alt="Indigo Image"
                        className="mr-[8.75rem] h-[1.75rem] md:mr-0"
                      />
                      <Img
                        src="images/img_television.svg"
                        alt="Television Image"
                        className="h-[4.75rem] w-[74%] self-end object-contain"
                      />
                    </div>
                    <div className="relative ml-[-7.00rem] flex flex-1 items-center md:ml-8 md:self-stretch sm:flex-col">
                      <Img
                        src="images/img_group_gray_300.svg"
                        alt="Gray Image"
                        className="relative z-[14] mb-[0.63rem] h-[8.75rem] w-[48%] self-end object-contain sm:w-full"
                      />
                      <div className="relative ml-[-11.00rem] flex flex-1 items-center sm:ml-0 sm:self-stretch">
                        <div className="flex flex-1 items-start">
                          <div className="flex flex-1 items-center self-center">
                            <Img
                              src="images/img_group_indigo_900_404x284.svg"
                              alt="Indigo Vector"
                              className="relative z-[11] h-[25.25rem] w-[72%] object-contain"
                            />
                            <Img
                              src="images/ing_vector.svg"
                              alt="Vector Image"
                              className="relative ml-[-6.13rem] h-[11.13rem] -[28%] self-end object-contain"
                            />
                          </div>
                          <Img
                            src="images/img_group_white_a700.svg"
                            alt="White Image"
                            className="relative z-[12] ml-[-5.25rem] mt-[3.58rem] h-[3.75rem] w-[30%] object-contain"
                          />
                        </div>
                      </div>
                      <Img
                        src="images/img_group_blue_300.svg"
                        alt="Blue Image"
                        className="relative z-[13] mb-[0.75rem] ml-[-2.00rem] h-[17.88rem] w-[28%] self-end object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_group_blue_gray_400_02.svg"
                alt="Blue Gray Image"
                className="absolute bottom-[8.88rem] left-8 right-8 z-[16] mx-auto h-[3.88rem] flex-1"
              />
            </div>
          </div>
        </div>
      </div>

    
      <div className="absolute left-8 right-e top-[37%] mx-auto h-[3.75rem] w-[44%]">
        <div className="absolute bottom-[0.00rem] left-[1.25rem] m-auto flex rounded-bl-[3px] rounded-br rounded-t1-[3px] rounded-tr-[3px] bg-[#ffffff]">
          <Img
            src="images/img_lock.svg"
            alt="Lock Image"
            className="h-[2.50rem] w-full lg:h-auto md:h-auto"
          />
        </div>
        <Heading
          size="headingxs"
          as="p"
          className="absolute left-[8.88rem] top-[8.88rem] m-auto h-[2.13rem] w-[2.13rem] rounded-[16px] bg-[#ff5f42] pb-[8.88rem] pl-[8.88rem] pr-[8.25rem] font-['Quicksand'] text-[0.75rem] font-bold text-[#ffffff]"
        >
          85
        </Heading>
      </div>
    </div>
  );
}
