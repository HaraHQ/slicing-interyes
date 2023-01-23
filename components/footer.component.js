import Image from "next/image";
import Link from "next/link";
import React from "react";
import fonts from "@/libs/font";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

import Logo from "../public/interyes-logo.png";

const Title = ({ children }) => {
  return (
    <div className={`text-3xl mt-4 md-max:mt-6 h-12 ${fonts.dmserif}`}>
      {children}
    </div>
  )
}

const FooterLink = ({ children, link, socmed = false, tw }) => {
  const [fontSize, setFontSize] = React.useState("text-xl");
  React.useEffect(() => {
    if (socmed) setFontSize("text-lg font-semibold");
  }, [socmed])
  return (
    <div className={tw}>
      <Link href={link} className={`${fontSize} my-2 hover:text-[#cda274] cursor-pointer`}>
        {children}
      </Link>
    </div>
  )
}

export const FooterMenuComponent = () => {
  return (
    <div className={`${fonts.jost}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <div className="h-16">
            <Image src={Logo} alt="Logo" width={185} height={65} />
          </div>
          <div className="text-xl leading-relaxed tracking-normal my-2">
            We are the leading architect and interior design firm in the world.
          </div>
          <div className="grid grid-cols-9 md:grid-cols-6 gap-4">
            <FooterLink link="/fb" socmed>
              <FaFacebookSquare className="text-3xl hover:text-[#cda274]" />
            </FooterLink>
            <FooterLink link="/tw" socmed>
              <FaTwitterSquare className="text-3xl hover:text-[#cda274]" />
            </FooterLink>
            <FooterLink link="/in" socmed>
              <FaLinkedin className="text-3xl hover:text-[#cda274]" />
            </FooterLink>
            <FooterLink link="/ig" socmed>
              <FaInstagramSquare className="text-3xl hover:text-[#cda274]" />
            </FooterLink>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-full">
            <Title>Pages</Title>
            <div className="flex flex-col w-full">
              <FooterLink tw="md-max:mb-6 mb-2" link="/">Style Guide</FooterLink>
              <FooterLink tw="md-max:mb-6 mb-2" link="/">Protected</FooterLink>
            </div>
          </div>
          <div className="w-full">
            <Title>Explore</Title>
            <div className="flex flex-col w-full">
              <FooterLink tw="md-max:mb-6 mb-2" link="/">About Us</FooterLink>
              <FooterLink tw="md-max:mb-6 mb-2" link="/">Recent Blogs</FooterLink>
            </div>
          </div>
        </div>
        <div>
          <Title>Contact</Title>
          <div className="text-xl leading-relaxed tracking-wide">53, East Birchwood Ave. Brooklyn, New York 11201, USA.</div>
          <div className="text-xl leading-relaxed tracking-wide my-4">
            <Link href={`mailto:hi@interyes.id`} className="hover:text-[#cda274]">
              hi@interyes.id
            </Link>
          </div>
          <div className="text-xl leading-relaxed tracking-wide">(123) 456 - 7890</div>
        </div>
      </div>
    </div>
  )
}

const FooterComponent = () => {
  return (
    <div className={`text-center text-xl border-t-2 w-full bg-white py-6 ${fonts.jost}`}>
      Copyright (c) Interyes | Designed By <Link href="/" className="text-[#cda274] hover:text-black cursor-pointer">Victorflow</Link> Templates - Powered by <Link href="/" className="text-[#cda274] hover:text-black cursor-pointer">Webflow</Link>
    </div>
  )
}

export default FooterComponent