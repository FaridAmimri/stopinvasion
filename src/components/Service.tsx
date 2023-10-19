/** @format */

import { Link } from 'react-router-dom'
import { service } from '../utils/data'
import ServiceItem from './ServiceItem'

const Service = () => {
  return (
    <div className='p-8 pt-0 flex flex-col gap-16 md:auto md:justify-around md:pt-8'>
      <div className='h-[calc(100vh-6rem)] flex flex-col justify-around md:h-auto md:flex md:flex-col md:gap-4'>
        <h1 className='text-5xl font-bold md:text-3xl '>
          Les meilleurs services que nous vous proposons
        </h1>
        <span className='text-lg text-gray-400 font-semibold'>
          Nous comprenons que la propreté et la sécurité de votre environnement
          sont essentielles pour votre bien-être et celui de vos proches. C'est
          pourquoi nous mettons à votre disposition une gamme complète de
          services professionnels pour éliminer les nuisibles et assurer un
          environnement sain
        </span>
        <div className='flex items-center'>
          <button className='w-40 bg-yellow-500 rounded p-4 text-white md:px-6 md:p-2'>
            <Link to='/about'>En savoir plus</Link>
          </button>
        </div>
      </div>

      <div className='flex flex-col gap-8 md:flex-row md:items-center md:gap-14'>
        {service.map((serviceItem) => (
          <ServiceItem key={serviceItem.id} data={serviceItem} />
        ))}
      </div>
    </div>
  )
}

export default Service
