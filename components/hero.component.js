import { Button } from "./default.component";
import fonts from "@/libs/font";

const HeroComponent = ({ children, font }) => {
  const { jost, dmserif } = fonts;
  return (
    <div>
      <div className="md:px-28 max-md:px-8 pb-32 md:w-[70%] max-md:w-full">
        <h1 className={`md:text-[80px] max-md:text-[50px] md:leading-[100px] max-md:tracking-tight ${dmserif}`}>Lets create your Dream Interior</h1>
        <p className={`md:text-3xl max-md:text-xl leading-tight ${jost}`}>The world needs innovators and problem solvers who turn challenges into greater opportunities</p>
        <Button title="Get Started" />
      </div>
    </div>
  )
}

export default HeroComponent;