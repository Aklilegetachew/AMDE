"use client";
import React from "react";
import Link from "next/link";
import Phone from "../../../../public/socials/phone.svg";
import Email from "../../../../public/socials/email.svg";
import Location from "../../../../public/socials/location.svg";
import Logo from "../../../public/logo.svg";
import { GlareCard } from "../../Component/ui/glare-card";

const ContactForm: React.FC = () => {
  return (
    <div className="paper mt-14">
      <div className="container mx-auto p-4 ">
        <div className="flex-col justify-evenly">
          <GlareCard className="bg-[#606060] flex flex-col w-full p-6">
            <div className="font-semibold text-xl text-white ">
              Contact Form
            </div>
            <div className=" text-white pb-12">Reach out to us today!</div>
            <div className="flex text-white pb-4">
              <div className="pr-2">
                <Phone width={24} height={24} />
              </div>
              <div>+251 911 44 86 34</div>
            </div>
            <div className="flex text-white pb-4">
              <div className="pr-2">
                <Email width={24} height={24} />
              </div>
              <div>info@amdedesign.com</div>
            </div>
            <div className="flex text-white pb-4">
              {" "}
              <div className="pr-2">
                <Location width={24} height={24} />
              </div>
              <div>Addis Ababa, Ethiopia</div>
            </div>
          </GlareCard>
          <div className="bg-[#606060] flex mt-4">
            <div className="font-semibold font-l">Contact Form</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
