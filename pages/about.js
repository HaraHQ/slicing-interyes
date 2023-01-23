import React from "react";
import { FaQuoteRight } from "react-icons/fa";

import fonts from "@/libs/font";
import PageLayout from "@/components/layouts/page.layout";
import NoteImageComponent from "@/components/note-image.component";
import MemberComponent from "@/components/member.component";
import GuestBookComponent from "@/components/guest-book.component";

const AboutPage = () => {
  return (
    <PageLayout
      activeKey={2}
      title="About Interyes"
      header={{ title: "About Us", segments: ["Home","About Us"]}}>
      <section className="max-md:mx-4 mx-28 my-12 p-2">
        <div className="bg-[#f4f0ec] flex flex-col justify-center items-center max-md:p-12 max-md:py-16 p-24 rounded-[80px]">
          <div className="p-4">
            <FaQuoteRight className="text-5xl text-[#cda274]" />
          </div>
          <h3 className={`text-2xl text-[#cda274] font-bold ${fonts.dmserif}`}>Your Home should tell the story of who you are, and be a Collection of what you Love.</h3>
        </div>
      </section>
      <section className="max-md:mx-4 mx-28 my-12 p-2">
        <NoteImageComponent
          title="Initial Design"
          description={`Craft design with the mind of delivering clean 
            water and energy. Building iconic skyscrapers. 
            Planning new cities. Restoring damaged building 
            Connecting people and economies with roads.
          `}
          text="Our Concept"
          handler={() => {}}
          imageAlign="right"
          imageUrl="/hancur.jpeg" />
        <NoteImageComponent
          title="The End Result"
          description={`With more than 3,500 active clients, 
            we work across the global economy. Our clients 
            are remarkably diverse: large and small, private 
            and public, for-profit and nonprofit.
          `}
          text="Explore More"
          handler={() => {}}
          imageAlign="left"
          imageUrl="/bagus.jpeg" />
      </section>
      <section className="px-8 my-12 py-2 bg-[#f4f0ec]">
        <MemberComponent />
      </section>
      <section className="max-md:mx-4 mx-28 my-32 px-12 md:max-2xl:px-32">
        <div className="flex justify-center">
          <h4 className={`w-full md:max-2xl:w-[63.3%] ${fonts.dmserif} text-5xl leading-normal text-center`}>Creative Project? Let&#39;s have a productive talk</h4>
        </div>
        <GuestBookComponent />
      </section>
    </PageLayout>
  )
}

export default AboutPage