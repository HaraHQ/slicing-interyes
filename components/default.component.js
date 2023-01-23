import React from "react";
import { FaArrowRight } from "react-icons/fa";
import fonts from "@/libs/font";

export const Button = ({ title, handler = () => {}, big = false, variant = "default" }) => {
  const [isHover,setIsHover] = React.useState(false);
  const handleVariant = (variant) => {
    switch (variant) {
      default:
      case "default":
        return "bg-black border-black text-white hover:bg-white hover:text-black";
      case "gold":
        return "bg-[#cda274] border-[#cda274] text-white hover:bg-white hover:text-[#cda274] hover:border-white";
    }
  }
  const handleHover = (e) => {
    if (e.type === "mouseenter")
      return setIsHover(true);
    if (e.type === "mouseleave")
      return setIsHover(false);
  }
  return (
    <button
      onClick={handler}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className={
        `
          border-2
          ${big ? `py-6 px-10 text-xl rounded-xl ` : `py-4 px-8 text-xl rounded-lg `}
          my-2 
          bg-black text-white
          ${handleVariant(variant)} 
          ${fonts.jost} 
        `
      }>
        <div className={`flex items-center`}>
          {title} 
          <FaArrowRight 
            className={`
            ${variant == "gold" ? `text-white ${isHover ? `text-[#cda274]` : false}` : `text-[#cda274]`} 
            ml-4 text-sm`} />
        </div>
      </button>
  )
}