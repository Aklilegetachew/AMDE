import React from "react";
import Email from "../../../public/socials/email.svg";
import Instagram from "../../../public/socials/instagram.svg";
import Location from "../../../public/socials/location.svg";
import Phone from "../../../public/socials/phone.svg";
import Telegram from "../../../public/socials/telegram.svg";

interface SocialsProps {
  alignment: "row" | "column";
}

const Socials: React.FC<SocialsProps> = ({ alignment }) => {
  return (
    <div
      className={`flex ${
        alignment === "column" ? "flex-col space-y-4" : "flex-row space-x-4"
      } justify-center items-center`}
    >
      <a
        href="mailto:someone@example.com"
        className="hover:opacity-80 transition"
      >
        <Email width={24} height={24} />
      </a>
      <a
        href="https://www.instagram.com"
        className="hover:opacity-80 transition"
      >
        <Instagram width={24} height={24} />
      </a>
      <a href="https://t.me" className="hover:opacity-80 transition">
        <Telegram width={24} height={24} />
      </a>
      <a href="tel:+1234567890" className="hover:opacity-80 transition">
        <Phone width={24} height={24} />
      </a>
      <a href="https://maps.google.com" className="hover:opacity-80 transition">
        <Location width={24} height={24} />
      </a>
    </div>
  );
};
export default Socials;
