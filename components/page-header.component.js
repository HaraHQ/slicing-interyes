import React from "react";
import fonts from "@/libs/font";

const PageHeaderComponent = ({ data }) => {
  const { title = "About Me", segments = ["Home"] } = data;
  return (
    <div
      style={{ backgroundImage: "url(page-header.jpeg)" }}
      className="bg-cover bg-center text-center flex justify-center pt-[100px]">
      <div className="pt-12 pb-8 w-[90vw] md:max-2xl:w-[32vw] bg-white rounded-t-3xl">
        <h1 className={`${fonts.dmserif} text-4xl`}>{title}</h1>
        <div className={`${fonts.jost} text-lg flex justify-center my-2`}>
          {segments.map((seg, ix) => {
            if (ix+1 !== segments.length) {
              return (
                <>
                  <div key={`ph_${ix+1}`}>{seg}</div>
                  <div className="mx-4">/</div>
                </>
              )
            } else {
              return (
                <>
                  <div key={`ph_${ix+1}`}>{seg}</div>
                </>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default PageHeaderComponent