import Head from 'next/head';

import DefaultLayout from '@/components/layouts/default.layout';
import HeroComponent from '@/components/hero.component';
import TextCardComponent from '@/components/text-card.component';
import { Button } from '@/components/default.component';
import { ReactSVG } from 'react-svg';
import Image from 'next/image';
import UserCommentCardComponent from '@/components/user-comment-card.component';

import Client1 from "../public/client1.svg";
import Client2 from "../public/client2.svg";
import Client3 from "../public/client3.svg";
import Client4 from "../public/client4.svg";
import Client5 from "../public/client5.svg";
import ProjectCardComponent from '@/components/project-card.component';
import BigTextCardComponent from '@/components/big-text-card.component';
import BlogCardComponent from '@/components/blog-card.component';
import React from 'react';

import fonts from '@/libs/font';
import InviteCardComponent from '@/components/invite-card.component';

export const Header = ({ children, title, subtitle, twchild }) => {
  return (
    <section className="max-md:mx-4 mx-28 my-12 py-12 px-2">
      <div className="text-center mb-14 max-md:px-8 px-[18.3%]">
        <h3 className={`text-5xl mb-8 ${fonts.dmserif}`}>{title}</h3>
        <p className={`tracking-wide text-xl ${fonts.jost}`}>{subtitle}</p>
      </div>
      <div className={twchild}>
        {children}
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <DefaultLayout activeKey={1}>
      <section className="flex items-center bg-[url('/interyes-hero.jpg')] h-screen w-full bg-cover bg-center md:rounded-bl-[300px]">
        <HeroComponent />
      </section>
      <section className="max-md:mx-4 mx-28 my-24">
        <div className="px-2 grid grid-cols-1 md:grid-cols-3">
          <TextCardComponent  title="Interior Design" desc="Enhancing the interior to achieve a healthier environment for the people using right space." url="/" />
          <TextCardComponent  title="Interior Design" desc="Enhancing the interior to achieve a healthier environment for the people using right space." url="/" />
          <TextCardComponent  title="Interior Design" desc="Enhancing the interior to achieve a healthier environment for the people using right space." url="/" />
        </div>
      </section>
      <section className="max-md:mx-4 mx-28 my-24">
        <div className="px-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className={`text-5xl tracking-wide leading-[65px] py-8 ${fonts.dmserif}`}>We Tackle The Most Challenging Designs</h2>
            <p className={`text-2xl tracking-wide leading-9 py-8 ${fonts.jost}`}>The world needs innovators and problem solvers
              who turn challenges into greater opportunities. We have
              an insatiable curiosity about transformative
              trends challenging the status.
            </p>
            <div className="flex py-6">
              <div className="rounded-full bg-yellow-100 w-24 h-24 flex justify-center items-center">
                <ReactSVG src="/intro-call.svg" className="mx-24" />
              </div>
              <div className={`flex flex-col justify-center mx-6 text-xl ${fonts.jost}`}>
                <div className="font-bold text-2xl">0123455678</div>
                <div>Call Us Anytime</div>
              </div>
            </div>
            <div className="py-4">
              <Button title="Get Free Estimate" />
            </div>
          </div>
          <div className="relative max-md:min-h-[400px]">
            <Image src="/interyes-side.jpeg" alt="side_image" fill className="rounded-bl-[150px] rounded-tr-[250px]" />
          </div>
        </div>
      </section>
      <section className="max-md:mx-4 mx-28 my-12 p-12 bg-[#f4f0ec] rounded-[50px]">
        <div className={`py-12 text-5xl text-center ${fonts.dmserif}`}>
          <div>What the People Thinks</div>
          <div>About Interyes</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <UserCommentCardComponent  user="Rizki" address="Serang, Banten" comment="We selected Interno interior because of rigorous design background & education." />
          <UserCommentCardComponent  user="Rizki" address="Serang, Banten" comment="We selected Interno interior because of rigorous design background & education." />
          <UserCommentCardComponent  user="Rizki" address="Serang, Banten" comment="We selected Interno interior because of rigorous design background & education." />
        </div>
      </section>
      <section className="max-md:mx-4 mx-28 my-12 p-12 grid-cols-2 grid md:grid-cols-5 gap-8">
        <div className="flex justify-center">
          <Image src={Client1} alt="Client1" height="50"  />
        </div>
        <div className="flex justify-center">
          <Image src={Client2} alt="Client2" height="50"  />
        </div>
        <div className="flex justify-center">
          <Image src={Client3} alt="Client3" height="50"  />
        </div>
        <div className="flex justify-center">
          <Image src={Client4} alt="Client4" height="50"  />
        </div>
        <div className="flex justify-center">
          <Image src={Client5} alt="Client5" height="50"  />
        </div>
      </section>
      <Header
        title="Recent Projects"
        subtitle="With tools to make every part of your process more human and a 
        support team excited to help you, getting started with us never been easier."
        twchild="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <ProjectCardComponent  />
          <ProjectCardComponent  />
          <ProjectCardComponent  />
          <ProjectCardComponent  />
      </Header>
      <section className="my-12 p-24 bg-[#f4f0ec]">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <BigTextCardComponent  title="12" desc="Years Of Experience" />
          <BigTextCardComponent  title="12" desc="Years Of Experience" />
          <BigTextCardComponent  title="12" desc="Years Of Experience" />
          <BigTextCardComponent  title="12" desc="Years Of Experience" last />
        </div>
      </section>
      <Header
        title="Recent Blogs"
        subtitle="Get updates about our latest trends and techniques used in 
        interior design project works."
        twchild="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <BlogCardComponent  />
          <BlogCardComponent  />
          <BlogCardComponent  />
          <BlogCardComponent  />
          <BlogCardComponent  />
          <BlogCardComponent  />
      </Header>
      <section className="max-md:mx-4 mx-28 my-12 p-2">
        <InviteCardComponent />
      </section>
    </DefaultLayout>
  )
}
