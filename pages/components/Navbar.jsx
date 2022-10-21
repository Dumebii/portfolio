import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import Homepage from './Homepage';


function NavBar(props) {
return(
    <section className="min-h-screen">
      <nav className='py-10 mb-12 flex justify-between'>
        <h1 className='text-xl font-burtons'>
            developedbyDumebi
        </h1>
        <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill onClick={props.onclick} className='cursor-pointer text-2xl' />
            </li>
            <li><a 
            className=' bg-gradient-to-r
             from-cyan-500 to-teal-500
              text-white px-4 py-2 
              rounded-md ml-8' href="https://www.linkedin.com/in/dumebi-okolo/">Linkedin</a></li>
        </ul>
      </nav>
      <Homepage />
    </section>
)
}

export default NavBar