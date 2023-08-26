import { DestinationCard } from "."
import { rajaAmpat, fanjingshan, vevey, skadar, circle, plus } from "../assets"

const Carousel = () => {
  return (
    <div className="container mx-auto mt-20 px-2 md:px-0 md:mt-56">
      <div className="flex justify-between items-center pb-12">
        <h1 className="text-left font-semibold text-3xl text-normalBlack leading-[42px]">
          Featured destinations
        </h1>
        <a href="#" className="text-lightOrange text-sm font-medium leading-[51px] hover:text-orange-300">View all </a>
      </div>
      <div className="flex flex-col pt-5 pb-12 space-y-5 md:space-y-0 md:space-x-3 md:flex-row">
        {[
          { city: 'Raja Ampat', country: 'Indonesia', img: rajaAmpat },
          { city: 'Fanjingshan', country: 'China', img: fanjingshan },
          { city: 'Vevey', country: 'Switzerland', img: vevey },
          { city: 'Skadar', country: 'Montenegro', img: skadar }].map(({ city, country, img, index }) => (
            <DestinationCard city={city} country={country} place={img} key={index} />
          ))}
      </div>
      <img src={circle} className="hidden w-4 h-4 absolute -mt-[32rem] ml-[50rem] md:block" alt="circle" />
      <img src={plus} className="hidden w-4 h-4 absolute -mt-40 -ml-28 md:block" alt="plus" />
      <img src={circle} className="hidden w-4 h-4 absolute -mt-2 ml-[26rem] md:block" alt="circle" />
    </div>
  )
}

export default Carousel