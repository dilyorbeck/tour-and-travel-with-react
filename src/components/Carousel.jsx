import { DestinationCard } from "."
import {TitleHeader} from "."
import { rajaAmpat, fanjingshan, vevey, skadar, circle, plus } from "../assets"

const Carousel = () => {
  return (
    <section id="destinations" className="container mx-auto mt-20 px-2 md:px-0 md:mt-56">
      <TitleHeader title='Featured destinations'/>
      <div className="flex flex-col py-12 space-y-5 md:space-y-0 md:space-x-3 md:flex-row">
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
    </section>
  )
}

export default Carousel