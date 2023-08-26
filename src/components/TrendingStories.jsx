import StoriesCard from "./StoriesCard"
import { meditation, japaneseFood, chichenItza, surfing, circle, plus } from '../assets'
import { FaChevronRight } from 'react-icons/fa';

const TrendingStories = () => {
  return (
    <section className="mt-20 px-2 md:px-0 md:mt-56">
      <div className="flex items-center justify-between">
        <h1 className="text-left font-semibold text-3xl text-normalBlack leading-[42px]">
          Trending Stories
        </h1>
        <span className="flex items-center text-lightOrange text-sm font-medium hover:text-orange-300">
          <a href="#" className="leading-[51px] mr-1">View all  </a><FaChevronRight />
        </span>
      </div>
      <div className="grid md:grid-cols-4 text-center md:text-left pt-5 pb-12 space-y-5 md:space-y-0 md:space-x-3 md:flex-row ">
        {[
          { heading: 'The many benefits of taking a healing holiday', subtitle: "‘Helaing holidays’ are on the rise to help maximise your health and happines...", img: meditation },
          { heading: 'The best Kyoto restaurant to try Japanese food', subtitle: "From tofu to teahouses, here’s our guide to Kyoto’s best restaurants to visit...", img: japaneseFood },
          { heading: 'Skip Chichen Itza and head to this remote Yucatan', subtitle: "It’s remote and challenging to get,       but braving the jungle and exploring          these ruins without the...", img: chichenItza },
          { heading: 'Surf’s up at these beginner spots around the world', subtitle: "If learning to surf has in on your to-do list for a while, the good news is: it’s never too late...", img: surfing }].map(({ heading, subtitle, img, index }) => (
            <StoriesCard title={heading} paragraph={subtitle} storyImg={img} key={index} />
          ))}
      </div>
      <img src={circle} className="hidden h-5 w-5 absolute -ml-20 -mt-96 md:block" alt="" />
      <img src={circle} className="hidden h-9 w-9 absolute ml-[59.5rem] -mt-[39rem] -z-10 md:block" alt="" />
      <img src={plus} className="hidden h-7 w-7 absolute ml-[30.4rem] -mt-4 md:block" alt="" />
    </section>
  )
}

export default TrendingStories