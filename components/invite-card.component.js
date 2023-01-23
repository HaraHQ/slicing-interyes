import React from "react";
import { Button } from "./default.component";
import fonts from "@/libs/font";

const InviteCardComponent = () => {
  return (
    <div className="bg-slate-800 text-center max-md:p-12 max-md:py-24 p-32 rounded-[80px]">
      <h3 className={`text-4xl text-white font-bold ${fonts.dmserif}`}>Wanna join the Inferyes?</h3>
      <p className={`text-xl text-white font-semibold py-4 ${fonts.jost}`}>Contact Us &amp; Get a Free Consultation</p>
      <Button title="Connect With Us" big variant="gold" />
    </div>
  )
}

export default InviteCardComponent