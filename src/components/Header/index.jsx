import { Button, Text } from "...";
import React from "react";

export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex justify-end items-end pl-[3.50rem] pr-[15.50rem] lg:pr-[2.00rem] md:px-[1.25rem] sm:px-[1.00rem] bg-[#ffffff] shadow-[0_4px_13px_0_#0000003f]`}
    >
      <div className="mt-[1.00rem] flex w-[70%] items-start justify-end gap-[2.63rem] lg:w-full md:w-full md:flex-col">
        <div className="mt-[8.63rem] flex flex-1 justify-end self-end md:self-stretch">
          <ul className="flex items-start gap-[3.00rem] md:flex-col">
            <li>
              <a href="#">
                <div className="flex flex-col items-end gap-[1.38rem]">
                  <Text
                    as="p"
                    className="font-['Inter'] text-[1.25rem] font-normal tracking-[0.00rem] text-[#111111] lg:text-[1.06rem]"
                  >
                    Services
                  </Text>
                  <div className="h-[8.19rem] w-[5.25rem] bg-[#4d57e1]" />
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="lg:text-[1.06rem]">
                <Text
                  as="p"
                  className="font-['Inter'] text-[1.25rem] font-normal tracking-[0.00rem] text-[#111111]"
                >
                  Solutions
                </Text>
              </a>
            </li>
            <li>
              <a href="#" className="lg:text-[1.06rem]">
                <Text
                  as="p"
                  className="font-['Inter'] text-[1.25rem] font-normal tracking-[0.00rem] text-[#111111]"
                >
                  Industries
                </Text>
              </a>
            </li>
            <li>
              <a href="#" className="lg:text-[1.06rem]">
                <Text
                  as="p"
                  className="font-['Inter'] text-[1.25rem] font-normal tracking-[0.00rem] text-[#111111]"
                >
                  Technologies
                </Text>
              </a>
            </li>
            <li>
              <a href="#" className="lg:text-[1.06rem]">
                <Text
                  as="p"
                  className="font-['Inter'] text-[1.25rem] font-normal tracking-[0.00rem] text-[#111111]"
                >
                  Portfolio
                </Text>
              </a>
            </li>
            <li>
              <a href="#" className="lg:text-[1.06rem]">
                <Text
                  as="p"
                  className="font-['Inter'] text-[1.25rem] font-normal tracking-[0.00rem] text-[#111111]"
                >
                  About Us
                </Text>
              </a>
            </li>
          </ul>
        </div>
        <Button
          size="sm"
          shape="round"
          className="min-w-[8.25rem] rounded-lg px-[0.63rem] font-['Inter'] font-semibold tracking-[0.00rem]"
        >
          Contact Us
        </Button>
      </div>
    </header>
  );
}
