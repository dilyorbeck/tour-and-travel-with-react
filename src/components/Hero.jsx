import Button from './Button'
import Input from "./Input"
import { destination, plus, circle } from "../assets"

const Hero = () => (
  <section id='home' className="mx-auto text-center mt-10 md:text-left md:mt-16 ">
    <div className="flex flex-col space-y-10 md:flex-row md:space-x-32 md:space-y-0">
      <div className="md:w-1/2 md:mt-5">
        <h1 className="font-semibold text-6xl text-normalBlack">
          Explore and
          Travel
        </h1>
        <h5 className="font-medium text-lg mt-16"> Holiday finder</h5>
        <hr className="mt-4 h-[2px] mx-auto w-full rounded bg-normalBlack md:w-7 md:mx-0"></hr>
        <div className="my-10 grid md:grid-cols-2 gap-y-7 md:gap-x-6">
          {['Location', 'Activity', 'Grade', 'Date'].map((value, index) => {
            return <Input title={value} key={index} />
          })}
        </div>
        <Button title={'Explore'} />
      </div>
      <div className="md:w-1/2">
        <img src={destination} alt="destination"/>
      </div>
    </div>
    <img src={circle} className="hidden h-5 w-5 -ml-28 -mt-56 absolute md:block" alt="circle" />
    <img src={plus} className="hidden h-4 w-4 absolute rotate-12 -mt-[28rem] ml-[26rem] md:block" alt="plus" />
  </section >
)

export default Hero