import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

import { Header } from "@/pages";
import fonts from "@/libs/font";

const Members = () => {
  return (
    <div>
      <div className="relative min-h-[480px] md:max-2xl:min-h-[420px] w-full">
        <Image src="/pro.jpeg" alt={`image+someone`} fill className="rounded-[30px]" />
      </div>
      <div className="my-4 text-center">
        <div className={`${fonts.dmserif} text-2xl`}>Rizki</div>
        <div className={`${fonts.jost} text-lg`}>Someone</div>
        <div className="text-lg font-semibold flex justify-center">
          <Link href="/fb" className={`text-lg m-2 hover:text-[#cda274] cursor-pointer`}>
            <FaFacebookSquare className="text-2xl hover:text-[#cda274]" />
          </Link>
          <Link href="/tw" className={`text-lg m-2 hover:text-[#cda274] cursor-pointer`}>
            <FaTwitterSquare className="text-2xl hover:text-[#cda274]" />
          </Link>
          <Link href="/tw" className={`text-lg m-2 hover:text-[#cda274] cursor-pointer`}>
            <FaLinkedin className="text-2xl hover:text-[#cda274]" />
          </Link>
        </div>
      </div>
    </div>
  )
}

const MemberComponent = () => {
  return (
    <Header
      title="Interyes Professional"
      subtitle="Talented team behind our success in all our projects. Dream your interior and
      our professional make your dream true">
        <div className="grid grid-cols-1 md:max-2xl:grid-cols-4 gap-4">
          {[1,2,3,4].map(m => (
            <Members key={m} />
          ))}
        </div>
    </Header>
  )
}

export default MemberComponent