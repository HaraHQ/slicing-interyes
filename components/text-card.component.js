import Link from "next/link";
import fonts from "@/libs/font";

const TextCardComponent = ({ title, desc, url = "/", font }) => {
  const { jost, dmserif } = fonts;
  return (
    <div className={`text-center p-10 hover:bg-[#f4f0ec] rounded-2xl ${jost}`}>
      <h3 className={`text-3xl py-6 ${dmserif}`}>{title}</h3>
      <p className="text-xl leading-9 pb-8">{desc}</p>
      <Link href={url} className="font-bold text-xl">View More</Link>
    </div>
  )
}

export default TextCardComponent;