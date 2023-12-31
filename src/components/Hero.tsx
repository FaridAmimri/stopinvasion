/** @format */

import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='h-[calc(100vh-6rem)] flex flex-col p-8 pt-0 gap-6 lg:flex-row md:gap-10 md:h-[calc(100vh-7rem)]'>
      <div className='flex-1 flex flex-col justify-between md:justify-around'>
        <h2 className='text-4xl font-extrabold leading-normal md:text-7xl'>
          Meet The Best Cleaning Services
        </h2>
        <span className='text-lg text-gray-400 font-semibold my-6 md:w-2/3 2xl:text-3xl'>
          Chaque service que nous offrons rendra votre domicile plus propre et
          plus sain
        </span>
        <div className='flex justify-between text-lg md:w-2/3'>
          <button className='w-30 bg-yellow-500 rounded p-2 px-6 text-white md:w-40'>
            <a href='#booking'>Estimation</a>
          </button>

          <button className='w-30 border-sky-500 border-2 rounded p-2 px-6 text-sky-500 md:w-40'>
            <Link to='/contact'>Contacter</Link>
          </button>
        </div>
      </div>

      <div className='flex-1 overflow-hidden'>
        <img
          src='/cleaning.png'
          alt='nettoyage et éradication'
          className='object-cover'
        />
      </div>
    </div>
  )
}

export default Hero
