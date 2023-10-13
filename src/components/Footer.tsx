/** @format */

import { Link } from 'react-router-dom'
import { menu } from '../utils/data'

const Footer = () => {
  return (
    <div className='h-screen flex flex-col justify-between p-8 bg-slate-800 text-white md:h-auto md:gap-10 2xl:h-1/2'>
      <div className='flex flex-1 flex-col lg:flex-row lg:items-center md:gap-10'>
        <div className='flex flex-col gap-4 lg:gap-12'>
          <h1 className='text-4xl font-bold '>StopInvasion</h1>
          <span className='text-2xl font-semibold'>
            Meet The Best Cleaning Services
          </span>
          <div className='flex flex-col gap-2'>
            <p className='text-lg text-slate-300'>
              Karanglewas, Melbern Ausi 45745
            </p>
            <p className='text-lg text-slate-300'>+33 6 52 15 65 75</p>
          </div>
        </div>

        <div className='flex-1 flex flex-col justify-around text-lg md:gap-10 lg:flex-row'>
          <ul className='flex flex-wrap lg:flex-col'>
            {menu.map((item) => (
              <li key={item.id}>
                <Link className='pr-5 hover:text-sky-500' to={item.link}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className='flex justify-between'>
            <div>
              <h6 className='text-sky-500 pb-2'>Promo</h6>
              <ul className='leading-10 text-base'>
                <li>50% Off</li>
                <li>Free Estimate</li>
                <li>New Customer</li>
              </ul>
            </div>
            <div>
              <h6 className='text-sky-500 pb-2'>Services</h6>
              <ul className='leading-10 text-base'>
                <li>Personnal Home</li>
                <li>Offices Building</li>
                <li>Vehicle</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='text-center font-bold text-lg'>
        <span>
          2023 FariDigital
          <br />
          All right reserved
        </span>
      </div>
    </div>
  )
}

export default Footer
