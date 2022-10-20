import {AiFillTwitterCircle, AiFillLinkedin, AiFillQuora} from 'react-icons/ai'
import {SiQuora} from 'react-icons/si'
import Card from './Card';
import Services from './Services';
import Waving from './Waving';





function Homepage() {
    return(
      <div className='text-center p-10'>
        <h2 className='text-5xl py-2 text-teal-600 font-medium'>
           Dumebi Okolo 
        </h2>
        <h3 className='text-2xl py-2'>
            Developer and writer
        </h3>
        <p className='text-medium py-5 leading-8 text-grey-800'>
           I am a frontend web developer,
            providing services for website building and management. 
        </p>
        <p>
            I write explanatory and helpful tutorial articles on <a href="">Hashnode.</a>
        </p>
        <div className='flex text-5xl justify-center gap-16 py-3 text-grey-600'>
           <AiFillTwitterCircle />
           <AiFillLinkedin />
           <SiQuora />
        </div>
        <div className=' mt-5'>
          <Waving />
        </div>
        <div className='mt-8'>
        <hr />
          <Services />
        </div>
        <div>
          <Card />
        </div>
      </div>
    )
}

export default Homepage;