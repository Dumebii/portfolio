import Image from 'next/image'
import wave from '../public/wave.jpg'
import {MdWavingHand} from 'react-icons/md'



function Waving() {
    return(
        <div className=' m-auto bg-gradient-to-r from-amber-100 to-yellow-200 w-[150px] h-[150px] rounded-full'>
           <MdWavingHand  className='w-[120px] h-[120px] m-auto text-green-400' layout='fill' objectFit='cover'/>
        </div>
    )
}

export default Waving