import { AiFillStar } from 'react-icons/ai';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { edwardNewgate, circle, plus } from '../assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useRef } from 'react';


const Testimonials = () => {
  const swiper = useRef()

  const onPreviousBtnClick = () => {
    console.log(swiper.current)
    swiper.current.swiper.slidePrev()
  }


  const onNextBtnClick = () => {
    swiper.current.swiper.slideNext()
  }

  return (<section id='about' className="mt-20 text-center px-2 md:px-0 md:text-left md:mt-52">
    <h1 className="font-semibold text-3xl text-normalBlack leading-[42px] pb-12">
      Testimonials
    </h1>
    <div className="flex flex-col space-y-10 md:space-y-0 md:space-x-5 md:flex-row">
      <div className="md:w-1/2">
        <div className="flex justify-center space-x-1 md:mt-32 md:justify-start">
          <AiFillStar className='h-5 w-5 text-lightYellow' />
          <AiFillStar className='h-5 w-5 text-lightYellow' />
          <AiFillStar className='h-5 w-5 text-lightYellow' />
          <AiFillStar className='h-5 w-5 text-lightYellow' />
          <AiFillStar className='h-5 w-5 text-lightYellow' />
        </div>
        <p className="text-xl leading-8 mt-6 md:mr-32">
          “Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”
        </p>
        <h6 className='mt-9 font-semibold text-lg'>
          Edward Newgate
        </h6>
        <p className="text-lightGray leading-10">
          Founder Circle
        </p>
      </div>
      <div className="md:w-1/2 z-1 relative">
        <Swiper
          loop={true}
          spaceBetween={30}
          ref={swiper}
          slidesPerView={1}
          direction={'horizontal'}
        >
          {[1, 2].map(e => {
            return <SwiperSlide key={e}>
              <div className="relative">
                <img src={edwardNewgate} className="z-10 rounded-t-xl w-full mx-auto md:mx-0" alt="edward__newgate" />
                <div className="flex justify-end">
                </div>
              </div>
            </SwiperSlide>
          })}
        </Swiper>
        <span className="bg-white absolute bottom-0 right-0 z-50 pl-6 pt-4 rounded-tl-xl space-x-1">
          <button onClick={onPreviousBtnClick} className='px-3 py-3 border rounded-full border-lightGray  text-lightGray hover:text-normalBlack hover:border-normalBlack'>
            <FaChevronLeft />
          </button>
          <button onClick={onNextBtnClick} className='px-3 py-3 border rounded-full border-normalBlack  text-normalBlack hover:text-lightGray hover:border-lightGray'>
            <FaChevronRight />
          </button>
        </span>
      </div>
    </div>
    <img src={circle} className="hidden h-5 w-5 absolute -ml-20 -mt-[24] md:block" alt="circle" />
    <img src={circle} className="hidden h-9 w-9 absolute ml-[59.5rem] -mt-[40rem] -z-10 md:block" alt="circle" />
    <img src={plus} className="hidden h-7 w-7 absolute ml-[29.8rem] -mt-4 md:block z-10" alt="plus" />
  </section>
  )
}


export default Testimonials