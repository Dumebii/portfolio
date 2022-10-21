import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'
import Image from 'next/image'


function Images() {
    return(
      <div> 
      
         <div className='lg:flex flex-3 gap-20'>
            <div className='shadow-lg p-6 rounded-xl my-6'>
                <Image src={web1} />
                <p className="text-md py-2 leading-8 text-grey-800">
                    This is a notepad application that can be accesed at
                    <a href="6eluj6.csb.app/" className="text-red-800 cusor-pointer text-lg font-black"> this website</a>
                </p>
              </div>
          <div className='shadow-lg p-6 rounded-xl my-6'>
                <Image src={web2} />
                <p className="text-md py-2 leading-8 text-grey-800">
                    This is a next-gen bank website created with beautiful UI and Ux that can be accesed at 
                    <a href="https://dhoobank.netlify.app" className="text-red-800 cusor-pointer text-lg font-black"> this website</a>
                </p> </div>
          </div>
          <div className='lg:flex flex-3 gap-20 mt-5'>
          <div className='shadow-lg p-6 rounded-xl my-6'>
                <Image src={web3} />
                <p className="text-md py-2 leading-8 text-grey-800">
                    This is an application that gives off the meaning of various emojis. It can be accesed at 
                    <a href="emojidiky.netlify.app/" className="text-red-800 cusor-pointer text-lg font-black"> this website</a>
                </p>
          </div>

       <div className='shadow-lg p-6 rounded-xl my-6'>
            <Image src={web4} />
            <p className="text-md py-2 leading-8 text-grey-800">
                This is a movie streaming application UI and Ux that can be accesed at 
                <a href="bestmoviez.netlify.app/" className="text-red-800 cusor-pointer text-lg font-black"> this website</a>
            </p>
       </div>
         </div>
          
        <div className='lg:flex flex-3 gap-20 mt-5'>  
       <div className='shadow-lg p-6 rounded-xl my-6'>
            <Image src={web5} />
            <p className="text-md py-2 leading-8 text-grey-800">
                This is a to-do list application that can be accesed at 
                <a href="7409cj.csb.app/" className="text-red-800 cusor-pointer text-lg font-black"> this website</a>
            </p>
       </div>
       <div className='shadow-lg p-6 rounded-xl my-6'>
            <Image src={web6} />
            <p className="text-md py-2 leading-8 text-grey-800">
                This is a dating website application with beautiful uI and uX that can be accesed at 
                <a href="dumebii.github.io/TinDog/" className="text-red-800 cusor-pointer text-lg font-black"> this website</a>
            </p>
       </div>
       </div>
       </div>
    )
}

export default Images