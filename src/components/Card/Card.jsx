import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Card = ({ icon, heading, description, link, card }) => {
  return (
    <div
      className={
        card
          ? `flex items-start gap-3 w-[327px] md:w-[704px] lg:w-[532px] mt-[24px] `
          : "w-[327px] mt-[40px] lg:mt-[64px] md:w-[336px] mx-[32px]"
      }
    >
      <img src={icon} alt="" />
      <div className={card ? "mt-0" : "mt-[16px] lg:mt-[20px]"}>
        <h4 className="text-[22px] font-semibold">{heading}</h4>
        <p
          className={
            card
              ? `text-pTextLightColor mt-[7px]`
              : "mt-[20px] text-pTextLightColor"
          }
        >
          {description}
        </p>
        <a
          href=""
          className={
            card
              ? `flex items-center text-btnBlue mt-[12px] font-semibold`
              : "flex items-center text-btnBlue mt-[16px] font-semibold"
          }
        >
          {link} <AiOutlineArrowRight className="ml-3 text-btnBlue" />
        </a>
      </div>
    </div>
  );
};

export default Card;
