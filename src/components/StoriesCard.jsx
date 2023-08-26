const StoriesCard = ({storyImg, title, paragraph}) => {
    return (
        <div>
            <div className="text-center md:text-left">
                <img src={storyImg} className="rounded-t-xl mx-auto h-full md:h-[218px] w-full object-cover" alt="story__card"/>
                    <h6 className="font-medium text-base leading-7 my-3">
                        {title}
                    </h6>
                    <p className="text-lightGray leading-6 text-sm pb-5">
                        {paragraph}
                    </p>
                    <a href="#" className="text-lightOrange text-sm font-medium hover:text-orange-300">Read more</a>
            </div>
        </div>
    )
}

export default StoriesCard