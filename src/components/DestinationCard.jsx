const DestinationCard = ({place, city, country }) => {
    return (
        <div>
            <div className="">
                <div className="relative">
                    <img src={place} className="w-full md:w-auto rounded-t-xl rounded-br-xl" alt="raja-ampat" />
                    <span className="absolute bg-white -mt-[56px] pb-1 pt-2 pr-5 rounded-tr-xl">
                        <h6 className="font-medium">{city}</h6>
                        <p className="text-lightGray">{country}</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default DestinationCard