import PageLayout from "@/components/layouts/page.layout";
import React from "react";

import TextCardComponent from "@/components/text-card.component";
import InviteCardComponent from "@/components/invite-card.component";
import WorkStepComponent from "@/components/work-step.component";

import fonts from "@/libs/font";

const AboutPage = () => {
  return (
    <PageLayout
      activeKey={3} title="Interyes Services"
      header={{ title: "Our Services", segments: ["Home","Our Services"]}}>
      <section className="max-md:mx-4 mx-28 my-24">
        <div className="px-2 grid grid-cols-1 md:grid-cols-3">
          <TextCardComponent  title="Interior Design" desc="Enhancing the interior to achieve a healthier environment for the people using right space." url="/" />
          <TextCardComponent  title="Interior Design" desc="Enhancing the interior to achieve a healthier environment for the people using right space." url="/" />
          <TextCardComponent  title="Interior Design" desc="Enhancing the interior to achieve a healthier environment for the people using right space." url="/" />
          <TextCardComponent  title="Interior Design" desc="Enhancing the interior to achieve a healthier environment for the people using right space." url="/" />
          <TextCardComponent  title="Interior Design" desc="Enhancing the interior to achieve a healthier environment for the people using right space." url="/" />
          <TextCardComponent  title="Interior Design" desc="Enhancing the interior to achieve a healthier environment for the people using right space." url="/" />
        </div>
      </section>
      <section className="max-md:mx-4 mx-28 my-24 p-2 max-md:p-12 max-md:py-24 p-32 rounded-2xl bg-[#f4f0ec]">
        <div className="text-center mb-14 max-md:px-8 px-[18.3%]">
          <h3 className={`text-5xl mb-8 ${fonts.dmserif}`}>{`How We Work`}</h3>
          <p className={`tracking-wide text-xl ${fonts.jost}`}>{`
            The world needs innovators and problem solvers who turn challenges into greater
            opportunities about transformative trends challenging the status.
            `}</p>
        </div>
        <WorkStepComponent imageAlign="left" title="Planning & Designing" stepNumber="01" />
        <WorkStepComponent imageAlign="right" title="Evaluation" stepNumber="02" />
        <WorkStepComponent imageAlign="left" title="Implementation" stepNumber="03" />
        <WorkStepComponent imageAlign="right" title="Perfect Result" stepNumber="04" />
      </section>
      <section className="max-md:mx-4 mx-28 my-12 p-2 ">
        <InviteCardComponent />
      </section>
    </PageLayout>
  )
}

export default AboutPage