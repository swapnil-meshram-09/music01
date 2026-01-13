import Button from "./Button"
import Song1 from '../Assets/Images/Tumbnail/image.png'

function CardMain() {
  return (
    <>
    <div className="relative top-13 left-2 h-30 w-30 border-none rounded-2xl bg-white">
        <img src={Song1} alt="not available" className="flex relative h-23 w-28 border-none rounded-2xl top-1 left-1"/>
        <h6 className='text-black relative top-0.5 left-4'>Song</h6>
        <Button />
    </div>
    </>
  )
}

export default CardMain