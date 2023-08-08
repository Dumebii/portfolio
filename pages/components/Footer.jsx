const months = 
["January", "February", "March", 
"April", "May", "June", 
"July", "August", "September", 
"October", "November", "December"];
let date = new Date;
let year = date.getFullYear();
let month = date.getMonth();
let stringMonth = months[month]

function Footer() {

    return(
       <div>
        <footer>
          <h1 className="text-2xl font-bold">{stringMonth} {year}</h1>
        </footer>
       </div> 
    )
}

export default Footer