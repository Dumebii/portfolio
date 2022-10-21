import Head from 'next/head'
import NavBar from './components/Navbar'
import {useState} from 'react'



export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  function changeMode() {
    setDarkMode(!darkMode)
  }
  return (
    <div className={darkMode? "dark" : ""}>
      <Head>
        <title>Dumebi Okolo</title>
        <meta name="portfolio" content="Great frontend portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="public/code.png" />
      </Head>

      <main className='bg-white px-10 dark:bg-gray-900'>
       <NavBar 
       onclick={changeMode}
        />

      </main>
    </div>
  )
}
