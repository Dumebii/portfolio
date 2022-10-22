import consulting from '../../public/consulting.png'
import code from '../../public/code.png'
import {TfiWrite} from 'react-icons/tfi'
import Image from "next/image"

function Card() {
 return(
    <div  className="lg:flex gap-10">
      <div className="text-center shadow-lg p-6 rounded-xl my-6">
        <Image src={code} width={100} height={100} />
        <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Website UIs</h3>
        <p className="py-2">
        Bringing to life your beautiful design templates
        </p>
        <h4 className="py-4 text-teal-600">
        Frontend Tools I work with:
       </h4>
        <ul>
        <li className="text-grey-800 py-1">
            HTML
        </li>
        <li className="text-grey-800 py-1">
            CSS
        </li>
        <li className="text-grey-800 py-1">
            Javascript
        </li>
        <li className="text-grey-800 py-1">
            Reactjs
        </li>
        <li className="text-grey-800 py-1">
            Nextjs
        </li>
        <li className="text-grey-800 py-1">
            Tailwindcss
        </li>
        <li className="text-grey-800 py-1">
            Bootstrap
        </li>
         </ul>
      </div>
     <div className="text-center shadow-lg p-6 rounded-xl my-6">
        <TfiWrite className='w-[120px] h-[120px] m-auto text-sky-600' />
        <h3 className="text-lg font-medium pt-8 pb-2">
            Well written articles
        </h3>
        <p className="py-2">
            I take the time to make sure that the tutorial <br /> articles I write  are  easy to read, and understand. <br /> Explaining each point as succiently as I can.
        </p>
        <h4 className="py-4 text-teal-600 mb-3">
            I write on:
        </h4>
        <p>
            <a href="https://dumebi.hashnode.dev/" className="text-red-600 py-1 mb-10">HashNode</a>
            <br /> <br /> <a href="https://www.quora.com/profile/Dumebi-13" className="text-red-600 py-1 mb-10">Quora</a>
            <br /> <br /><a href="https://www.linkedin.com/in/dumebi-okolo/" className="text-red-600 py-1 mb-10">Linkedin</a>
        </p>
     </div>
     <div className="text-center shadow-lg p-6 rounded-xl my-6">
        <Image src={consulting} width={100} height={100} />
        <h3 className="text-lg font-medium pt-8 pb-2">Great Developer Relation skills</h3>
        <p className="py-2">
          Having years of experience in FinTech marketing, <br/>
          <span className="py-4 text-teal-600">
              I believe that I am in a great position to work as:
          </span>
          
        </p>
        <ul>
            <li className="text-grey-800 py-1">
                Developer Advocate
            </li> <br />
            <li className="text-grey-800 py-1">
                Developer Relations officer
            </li> <br />
            <li className="text-grey-800 py-1">
                Developer evangelist
            </li> <br />
            <li className="text-grey-800 py-1">
                Developer Experience officer
            </li>
        </ul>
      </div>
    </div>
 )  
}

export default Card