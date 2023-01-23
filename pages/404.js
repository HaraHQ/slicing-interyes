import PageLayout from "@/components/layouts/page.layout";
import { Button } from "@/components/default.component";
import { FaQuoteRight } from "react-icons/fa";
import React from "react";

import fonts from "@/libs/font";
import Image from "next/image";
import { useRouter } from "next/router";
import ErrorLayout from "@/components/layouts/error.layout";

const AboutPage = () => {
  const router = useRouter();
  return (
    <ErrorLayout>
      <div className="grid max-md:grid-cols-1 grid-cols-2 gap-6 w-full min-h-screen">
        <div className=" flex flex-col item-center-30 pl-28 max-md:pl-4">
          <div className={`text-[250px] leading-tight text-[#cda274] ${fonts.dmserif}`}>{`404`}</div>
          <div className={`text-4xl ${fonts.dmserif}`}>
            {`
              We are sorry, but the page you requested was not found
            `}
          </div>
          <div>
            <Button
              title="Back To Home"
              src={"text-start"}
              handler={() => router.replace("/")} />
          </div>
        </div>
        <div className="hidden relative md:max-2xl:block">
          <Image src="/404.jpeg" className="rounded-bl-[200px] z-10" alt="404" fill />
        </div>
      </div>
    </ErrorLayout>
  )
}

export default AboutPage