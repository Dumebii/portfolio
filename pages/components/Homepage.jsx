import {AiFillTwitterCircle, AiFillLinkedin, AiFillQuora, AiFillGithub} from 'react-icons/ai'
import {SiQuora} from 'react-icons/si'
import Card from './Card';
import Images from './Images';
import Portfolio from './Portfolio';
import Services from './Services';
import Waving from './Waving';




function Homepage() {
    return(
      <div className='text-center p-10'>
        <h2 className='text-5xl py-2 text-teal-600 font-medium'>
           Dumebi Okolo 
        </h2>
        <h3 className='lg:text-3xl text-2xl py-2 dark:text-white'>
            Developer, Marketer and  Writer
        </h3>
        <p className='lg:text-2xl text-medium py-5 leading-8 text-grey-800 dark:text-white'>
           I am a frontend web developer,
            providing services for website building and management. 
        </p>
        <p className='lg:text-2xl text-medium py-5 leading-8 text-grey-800 dark:text-white'>
            I write explanatory and helpful tutorial articles on <a href="">Hashnode.</a>
        </p>
        <div className='flex text-5xl justify-center gap-16 py-3 text-grey-600 dark:text-white'>
           <a href='https://twitter.com/DumebiTheWriter' className='cusor-pointer'>
             <AiFillTwitterCircle />
           </a>
           <a href='https://www.linkedin.com/in/dumebi-okolo/' className='cusor-pointer'>
             <AiFillLinkedin />
           </a>
           <a href='https://www.quora.com/profile/Dumebi-13' className='cusor-pointer'>
             <SiQuora />
           </a>
           <a href='https://github.com/Dumebii' className='cusor-pointer'>
            <AiFillGithub />
           </a>
        </div>
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
          <h3 className='text-teal-600 font-black text-5xl m-10'>
            Some project highlights
          </h3>
          <Images />
        </div>
      </div>
    )
}

export default Homepage;
