/** @format */

import { DataType } from '../types/types'
import ServiceItem from './ServiceItem'

const data: DataType = [
  {
    id: 1,
    img: '/house.png',
    title: 'Personnal House Cleaning Services',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
  },
  {
    id: 2,
    img: '/office.png',
    title: 'Office Building Cleaning Services',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
  },
  {
    id: 3,
    img: '/vehicle.png',
    title: 'Vehicle Cleaning Services',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
  }
]

const Service = () => {
  return (
    <div className='p-8 flex flex-col gap-16 md:auto md:justify-around'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-5xl font-bold md:text-3xl '>
          Best services we provided for you
        </h1>
        <span className='text-lg text-gray-400 font-semibold'>
          Trust ensures every service we offer will get your home cleaner.
          Unsures every service we offer will get your home cleaner, nsures
          every service we offer will get your home cleaner. Bnsures every
          service we offer will get your home cleaner nsures every service we
          offer will get your home cleaner
        </span>
        <div className='flex items-center md:hidden'>
          <button className='w-40 bg-yellow-500 rounded p-4 text-white md:px-6 md:p-2'>
            Learn more
          </button>
        </div>
      </div>

      <div className='flex flex-col gap-8 md:flex-row md:items-center md:gap-14'>
        {data.map((dataItem) => (
          <ServiceItem key={dataItem.id} data={dataItem} />
        ))}
      </div>
    </div>
  )
}

export default Service
