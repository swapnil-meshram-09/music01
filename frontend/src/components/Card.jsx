import CardMain from "./CardMain"
function Card() {
  return (
    <>
    <div className='absolute gap-3 bg-white flex top-7 left-23 h-84 w-169'>
      <h3 className='absolute top-3 left-3 text-black'>My Collection</h3>
        <CardMain />
        <CardMain />
        <CardMain />
        <CardMain />
        <CardMain />
    </div>

    </>
  )
}

export default Card