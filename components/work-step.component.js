import fonts from "@/libs/font";
import Image from "next/image";
import { ReactSVG } from "react-svg";

const WorkStepComponent = ({ imageUrl, iconUrl, stepNumber = "01", title, description, imageAlign = "left" }) => {
  return (
    <div className="grid grid-cols-1 md:max-2xl:grid-cols-2 gap-8 my-8">
      {imageAlign == "left" ? (
        <div className="relative max-md:min-h-[400px]">
          <Image src="/service.jpeg" alt="side_image" fill className="rounded-tr-[150px] rounded-bl-[250px]" />
        </div>
      ) : false}
      <div className="grid grid-cols-1 gap-4">
        <div className="flex flex-row justify-between h-[120px] item-center">
          <ReactSVG src="/step1_icon.svg" className="w-72 h-72 mt-[32px]" />
          <div className={`text-[85pt] ${fonts.dmserif} text-white`}>{stepNumber}</div>
        </div>
        <div className="pt-16">
          <h3 className={`${fonts.dmserif} text-4xl my-6`}>Planning & Designing</h3>
          <p className={`${fonts.jost} text-xl mb-24`}>
            {
              `Constructor explains how you can enjoy high end
              flooring trends like textured wood and realistic 
              stones with new laminate flooring.`
            }
          </p>
        </div>
      </div>
      {imageAlign == "right" ? (
        <div className="relative max-md:min-h-[400px] order-first md:max-2xl:order-last">
          <Image src="/service2.jpeg" alt="side_image" fill className="rounded-tr-[150px] rounded-bl-[250px]" />
        </div>
      ) : false}
    </div>
  )
}

export default WorkStepComponent