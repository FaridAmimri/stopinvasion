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
            <div className='flex gap-1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
                />
              </svg>

              <p className='text-lg text-slate-300'>
                13 rue Alfred Dumont, Dunkerque
              </p>
            </div>
            <div className='flex gap-1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
                />
              </svg>

              <p className='text-lg text-slate-300'>+33 6 95 09 20 17</p>
            </div>
          </div>
        </div>

        <div className='flex-1 flex flex-col justify-around text-lg md:items-center md:gap-10 lg:flex-row'>
          <ul className='flex flex-wrap lg:flex-col'>
            {menu.map((item) => (
              <li key={item.id} className='lg:pb-3'>
                <Link className='pr-5 hover:text-sky-500' to={item.link}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className='flex justify-between'>
            <div className='mr-8'>
              <h6 className='text-sky-500 pb-2'>Promo</h6>
              <ul className='leading-10 text-base'>
                <li>50% Off</li>
                <li>Devis gratuit</li>
                <li>Nouveau Client </li>
              </ul>
            </div>
            <div>
              <h6 className='text-sky-500 pb-2'>Services</h6>
              <ul className='leading-10 text-base'>
                <li>Maison</li>
                <li>Bureau</li>
                <li>Véhicule</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='text-center font-bold text-sm'>
        <Link to='https://faridigital.fr/' target='blank'>
          2023 FariDigital
          <br />
          All right reserved
        </Link>
      </div>
    </div>
  )
}

export default Footer
