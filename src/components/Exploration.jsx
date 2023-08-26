import { exploration, circle, plus } from '../assets'
import Button from './Button';

const Exploration = () => (
    <section className="text-center mt-20 md:mt-48 md:text-left">
      <div className='flex flex-col-reverse md:space-x-20 md:flex-row'>
      <div className="md:w-1/2 mt-10 md:mt-0">
            <img src={exploration} alt="exploration"/>
        </div>
        <div className="md:w-1/2">
            <h2 className="font-semibold text-3xl text-normalBlack leading-[42px] md:pr-32"> A new way to explore the world </h2>
            <p className="text-lightGray pt-4 md:mr-10 mb-7">
                For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect trip, but now, they can also let Lonely Planet Experiences lead the way
            </p>
            <Button title="Learn More" />
        </div>
      </div>
      <img src={circle} className="hidden h-4 w-4 absolute ml-10 ml-[51rem] -mt-28 md:block" alt="circle"/>
      <img src={plus} className="hidden h-4 w-4 absolute ml-[28rem] -mt-96 md:block" alt="plus"/>
    </section >
)

export default Exploration;