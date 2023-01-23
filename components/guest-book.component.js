import React from "react";
import { Button } from "./default.component";

const GuestBookComponent = () => {
  return (
    <form>
      <div className="grid grid-cols-1 md:max-2xl:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <input type="text" className="border-b-2 placeholder-slate-700 bg-transparent border-black text-2xl py-4 my-4 focus:outline-none" placeholder="Name" />
          <input type="mobile" className="border-b-2 placeholder-slate-700 bg-transparent border-black text-2xl py-4 my-4 focus:outline-none" placeholder="Phone" />
        </div>
        <div className="flex flex-col">
          <input type="email" className="border-b-2 placeholder-slate-700 bg-transparent border-black text-2xl py-4 my-4 focus:outline-none" placeholder="Email" />
          <input type="text" className="border-b-2 placeholder-slate-700 bg-transparent border-black text-2xl py-4 my-4 focus:outline-none" placeholder="Subject" />
        </div>
      </div>
      <div>
        <textarea
          placeholder="Hello Iam Interested in..."
          aria-multiline="true"
          className="min-h-[180px] border-b-2 placeholder-slate-700 bg-transparent border-black text-2xl py-4 my-4 w-full focus:outline-none"
        />
      </div>
      <div className="flex justify-center">
        <Button title="Submit" />
      </div>
    </form>
  )
}

export default GuestBookComponent