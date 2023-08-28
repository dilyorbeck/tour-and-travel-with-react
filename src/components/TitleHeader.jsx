import { FaChevronRight } from "react-icons/fa"

const TitleHeader = ({title}) => {
  return (
    <div>
        <div className="flex items-center justify-between">
        <h1 className="text-left font-semibold text-3xl text-normalBlack leading-[42px]">
          {title}
        </h1>
        <span className="flex items-center text-lightOrange text-sm font-medium hover:text-orange-300">
          <a href="#" className="leading-[51px] mr-1">View all  </a><FaChevronRight />
        </span>
      </div>
    </div>
  )
}

export default TitleHeader