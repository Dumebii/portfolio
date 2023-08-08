// import {MdWavingHand} from 'react-icons/md'
import avatar from '../../public/linkedin.jpg'
import Image from 'next/image'



function Waving() {
    return(
        <div className=' m-auto bg-gradient-to-r from-amber-100 to-yellow-200 w-[150px] h-[150px] rounded-full mt-6'>
           <Image src={avatar}  className='w-[120px] h-[120px] m-auto rounded-full' />
        </div>
    )
}

export default Waving