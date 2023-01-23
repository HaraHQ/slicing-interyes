import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import fonts from "@/libs/font";

const ProjectCardComponent = ({ font }) => {
  const { jost, dmserif } = fonts;
  return (
    <div className="relative w-full">
      <div className="relative w-full min-h-[650px]">
        <Image src="/project.jpeg" alt="Project" fill className="rounded-tr-[100px]" />
      </div>
      <div className={`flex justify-between items-center my-6 ${jost}`}>
        <div>
          <div className={`text-2xl ${dmserif}`}>Creative Workplace Design</div>
          <div className="text-xl">Minimalist</div>
        </div>
        <Link href="/" className="w-20 h-20 bg-[#f4f0ec] hover:bg-[#cda274] rounded-full flex justify-center items-center text-3xl">
          <FaAngleRight />
        </Link>
      </div>
    </div>
  )
}

export default ProjectCardComponent;