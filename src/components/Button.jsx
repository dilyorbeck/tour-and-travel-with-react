export default function Button({title}) {
  return (
    <div className="mx-auto md:mx-0">
      <button className="py-2 px-10 text-sm rounded-lg border border-lightOrange text-white bg-lightOrange hover:text-lightOrange hover:bg-white">
        {title}
      </button>

    </div>
  )
}
