import {AiFillTwitterCircle, AiFillLinkedin, AiFillQuora, AiFillGithub} from 'react-icons/ai'
import {SiQuora} from 'react-icons/si'
import Card from './Card';
import Images from './Images';
import Portfolio from './Portfolio';
import Services from './Services';
import Waving from './Waving';
import Footer from './Footer';


function Homepage() {
    return(
      <div className='text-center p-10'>
        <h2 className='text-5xl py-2 text-teal-600 font-medium dark:text-white'>
           Dumebi Okolo 
        </h2>
        <h3 className='lg:text-3xl text-2xl py-2 dark:text-white'>
            Front-end Developer and Technical Writer
        </h3>
        <p className='lg:text-2xl text-medium py-5 leading-8 dark:text-white text-grey-800'>
        Coding Connections with Words: Frontend Developer Par Excellence  <br />
        Masters Developer Relations Through the Art of Technical Prose        </p>
        <p className='lg:text-2xl text-medium py-5 leading-8 text-grey-800 dark:text-white'>
            I write explanatory and helpful tutorial articles on <a href="dumebi.hashnode.dev" target='_blank' className='hover:text-blue-600'>Hashnode.</a>
        </p>
        <hr className='m-6' />
        <div className='flex text-5xl justify-center gap-16 py-3 text-grey-600 m-5'>
           <a href='https://twitter.com/DumebiTheWriter' className='cusor-pointer dark:text-blue-800'>
             <AiFillTwitterCircle />
           </a>
           <a href='https://www.linkedin.com/in/dumebi-okolo/' className='cusor-pointer dark:text-blue-500'>
             <AiFillLinkedin />
           </a>
           <a href='' className='cusor-pointer dark:text-red-600'>
             <SiQuora />
           </a>
           <a href='https://github.com/Dumebii' className='cusor-pointer dark:text-gray-400'>
            <AiFillGithub />
           </a>
        </div>
        <hr />
        <div className=' mt-5'>
          <Waving />
        </div>
        <div className='mt-8'>
        <hr />
          <Services />
          <hr />
        </div>
        <div className='mt-10'>
          <Card />
          <hr />
        </div>
        <div className='mt-10'>
          <Portfolio />
          <hr />
        </div>
        <div className='mt-10'>
          <h3 className='text-teal-600 font-black text-5xl m-10 dark:text-white'>
            Some project highlights
          </h3>
          <Images />
        </div>
        <div className='mt-10'>
        <Footer /></div>
      </div>
    )
}

export default Homepage;