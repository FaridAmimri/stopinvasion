/** @format */

import { Link } from 'react-router-dom'
import { Button } from './ui/button'

const CallToAction = () => {
  return (
    <div className='flex flex-col gap-4 p-8'>
      <div className='flex flex-col gap-4 bg-green-500 text-white py-14 px-20 relative overflow-hidden md:flex md:items-center'>
        <h2 className='font-bold text-2xl text-center md:text-4xl'>
          Dites stop aux nuisibles avec StopInvasion
        </h2>
        <span className='hidden text-lg md:flex md:w-1/2 md:text-center'>
          Obtenez votre attestation d'inspection logement "nuisible" en 24H
          conformément à l'article 142 loi ELan
        </span>
        <div className='hidden md:flex md:justify-center'>
          <Button className='w-40 bg-black rounded p-4 px-6 text-white transition duration-150 ease-in-out'>
            C'est parti
          </Button>
        </div>
        <div className='bg-white absolute top-[0px] right-[-22px] rotate-45 h-2 w-32' />
        <div className='bg-white absolute bottom-[0px] left-[-22px] rotate-45 h-2 w-32' />
      </div>
      <div className='text-center md:hidden'>
        <button className='w-40 bg-yellow-500 rounded p-2 px-6 text-white'>
          <Link to='/contact'> C'est parti</Link>
        </button>
      </div>
    </div>
  )
}

export default CallToAction
