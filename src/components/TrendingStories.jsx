import StoriesCard from "./StoriesCard"
import TitleHeader from "./TitleHeader"
import { meditation, japaneseFood, chichenItza, surfing, circle, plus } from '../assets'

const TrendingStories = () => {
  return (
    <section id="partner" className="mt-20 px-2 md:px-0 md:mt-56">
      <TitleHeader title='Trending Stories'/>
      <div className="grid md:grid-cols-4 text-center md:text-left py-12 space-y-5 md:space-y-0 md:space-x-3 md:flex-row ">
        {[
          { heading: 'The many benefits of taking a healing holiday', subtitle: "‘Helaing holidays’ are on the rise to help maximise your health and happines...", img: meditation },
          { heading: 'The best Kyoto restaurant to try Japanese food', subtitle: "From tofu to teahouses, here’s our guide to Kyoto’s best restaurants to visit...", img: japaneseFood },
          { heading: 'Skip Chichen Itza and head to this remote Yucatan', subtitle: "It’s remote and challenging to get,       but braving the jungle and exploring          these ruins without the...", img: chichenItza },
          { heading: 'Surf’s up at these beginner spots around the world', subtitle: "If learning to surf has in on your to-do list for a while, the good news is: it’s never too late...", img: surfing }].map(({ heading, subtitle, img, index }) => (
            <StoriesCard title={heading} paragraph={subtitle} storyImg={img} key={index} />
          ))}
      </div>
      <img src={circle} className="hidden absolute h-4 w-4 -ml-20 -mt-52 md:block" alt="" />
      <img src={circle} className="hidden absolute h-4 w-4 ml-[39rem] md:block" alt="" />
      <img src={plus} className="hidden absolute h-4 w-4 -mt-[38rem] ml-80 md:block" alt="" />
    </section>
  )
}

export default TrendingStories