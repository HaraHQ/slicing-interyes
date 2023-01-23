import fonts from "@/libs/font";
const BigTextCardComponent = ({ title, desc, last = false, font }) => {
  const { jost, dmserif } = fonts;
  return (
    <div className={`text-center ${last ? `` : ` md:max-2xl:border-r-2 border-[#cda274]`}`}>
      <h3 className={`text-[72pt] text-[#cda274] ${dmserif}`}>{title}</h3>
      <p className={`text-xl text-black ${jost}`}>{desc}</p>
    </div>
  )
}

export default BigTextCardComponent;