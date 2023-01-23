import React from "react";
import Image from "next/image";
import { Button } from "./default.component";
import fonts from "@/libs/font";

const NoteImage = ({ imageUrl, alt }) => {
  return (
    <div className="relative max-md:min-h-[400px] col-span-5 md:max-2xl:col-span-3">
      <Image src={imageUrl} alt={`image+${alt}`} fill className="rounded-[80px]" />
    </div>
  )
}

const NoteImageComponent = ({ title, description, text, handler = () => {}, imageUrl, imageAlign }) => {
  return (
    <div className="grid grid-cols-5 gap-16 my-24">
      {imageAlign === "left" ? <NoteImage imageUrl={imageUrl} alt={Math.random() * 10000} /> : false}
      <div className="py-12 col-span-5 md:max-2xl:col-span-2">
        <div className={`${fonts.dmserif} text-4xl`}>{title}</div>
        <div className={`${fonts.jost} tracking-wider leading-loose text-xl my-4`}>
          {description}
        </div>
        <Button title={text} />
      </div>
      {imageAlign === "right" ? <NoteImage imageUrl={imageUrl} alt={Math.random() * 10000} /> : false}
    </div>
  )
}

export default NoteImageComponent