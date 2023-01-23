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
      title="Interyes Pro Team Members"
      header={{ title: "Our Professionals", segments: ["Home","Our Professionals"]}}>
      <section className="px-8 my-12 py-2">
        <MemberComponent />
      </section>
    </PageLayout>
  )
}

export default AboutPage