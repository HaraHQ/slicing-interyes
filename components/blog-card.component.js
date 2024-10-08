import Image from "next/image";
import Link from "next/link";
import fonts from "@/libs/font";
import { FaAngleRight } from "react-icons/fa";

const BlogCardComponent = ({ font }) => {
  const { jost, dmserif } = fonts;
  return (
    <div className={`relative w-full pt-4 px-4 pb-6 border-2 rounded-[50px] ${jost}`}>
      <div className="relative w-full min-h-[280px]">
        <Link href="/" className="px-4 py-2 bg-white text-md absolute bottom-[20px] left-[20px] rounded-xl hover:bg-[#f4f0ec] z-20">
          Kitchen Design
        </Link>
        <Image src="/blog.jpeg" alt="Blog" fill className="rounded-t-[40px] z-10" />
      </div>
      <div className="my-6">
      <div className={`text-xl cursor-pointer hover:text-[#cda274] ${dmserif}`}>Residentian Interior Designer In New York, USA</div>
        <div className="flex justify-between items-center">
          <div className="text-lg">January 23, 2023</div>
          <Link href="/" className="w-12 h-12 bg-[#f4f0ec] hover:bg-[#cda274] rounded-full flex justify-center items-center text-lg">
            <FaAngleRight />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCardComponent