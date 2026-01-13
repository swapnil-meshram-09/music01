import {Link, Routes, Route} from 'react-router-dom'
import Card from './components/Card'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <div className='relative'>
      <div className=' fixed top-0 left-23 h-7 w-169 bg-black opacity-80'>
        <nav className='flex mx-30 gap-20 bg-black opacity-80'>
        <Link href='/' className=''>Home</Link>
        <Link href='/'>Home</Link>
        <Link href='/'>Home</Link>
        <Link href='/'>Home</Link>
        </nav>
       </div>

       <div className='z-10 fixed top-0 left-0 h-100 w-23 bg-black opacity-90'>
        <nav className='grid mx-1 my-15 gap-10 bg-black opacity-50 p-1 justify-items-center'>
        <Link href='/'>Collection</Link>
        <Link href='/'>Songs</Link>
        <Link href='/'>Home</Link>
        <Link href='/'>Home</Link>
        </nav>
       </div>

      <Card />

      <Navbar />





    </div>
    </>
  )
}

export default App
