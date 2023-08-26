import { guides, circle, plus } from '../assets'
import Button from './Button';

const Exploration = () => (
    <section className="mx-auto text-center px-2 md:px-0 md:mt-48 md:text-left">
        <div className="flex flex-col space-y-8 md:space-y-0 md:space-x-10 md:flex-row">
            <div className='md:w-1/2 mt-12 md:mt-32'>
                <h2 className="font-semibold text-3xl text-normalBlack leading-[42px] md:pr-32">Guides by Thousand Sunny </h2>
                <p className="text-lightGray mt-4 mb-7 md:mr-10">
                    Packed with tips and advice from our on-the-ground experts, our city guides app (iOS and Android) is the ultimate resource before and during a trip.
                </p>
                <Button title="Download" />
            </div>
            <div className="md:w-1/2">
                <img src={guides} alt="guides"/>
            </div>
        </div>
        <img src={circle} className="hidden h-4 w-4 absolute ml-10 -mt-[22rem] md:block" alt="plus"/>
    <img src={plus} className="hidden h-3 w-3 absolute ml-[64rem] -mt-[25rem] md:block" alt="plus"/>
    <img src={plus} className="hidden h-4 w-4 absolute ml-96 -mt-[5.5rem] rotate-12 md:block" alt="plus"/>
    </section >
)

export default Exploration;