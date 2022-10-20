import { BsCardChecklist } from "react-icons/bs"
import design from '../public/design.png'
import code from '../public/code.png'
import {TfiWrite} from 'react-icons/tfi'
import Image from "next/image"

function Card() {
 return(
    <div>
     <Image src={design} width={100} height={100} />
     <h3>Beautiful design rendering</h3>
     <p>
        Bringing to life your beautiful design templates
     </p>
     <h4>
        Frontend Tools I work with:
     </h4>
     <ul>
        <li>
            HTML
        </li>
        <li>
            CSS
        </li>
        <li>
            Javascript
        </li>
        <li>
            Reactjs
        </li>
        <li>
            Nextjs
        </li>
        <li>
            Tailwindcss
        </li>
        <li>
            Bootstrap
        </li>
     </ul>
     {/* <Image src={code} /> */}
    </div>
 )  
}

export default Card