import Play from '../Assets/Images/Button/Play.png'


function Button() {

  const buttonClicked = () =>{
      
      
   }  

  return (
    <>
    <button className="bg-green-400 absolute top-22 left-20 border-none rounded-full h-6 w-6  " 
        onClick={buttonClicked}
    >
      <img src={Play} alt="not available" className='absolute top-1 left-1 h-3 w-3 m-0.5 pl-0.5'/>
    </button>
    </>
  )
}

export default Button