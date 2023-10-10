/** @format */

import { useState } from 'react'

const Header = () => {
  const menu = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'Services' },
    { id: 3, name: 'About us' },
    { id: 4, name: 'Contact' }
  ]

  const [activeMenu, setActiveMenu] = useState('Home')

  return (
    <div className='flex items-center p-6 w-screen justify-between'>
      <div className='flex-1 text-xl font-bold'>StopInvasion</div>
      <div className='flex-2 flex gap-6'>
        {menu.map((item) => {
          const isActive = item.name == activeMenu
          const textClass = `text-lg cursor-pointer ${
            isActive ? 'text-sky-500' : ''
          }`
          return (
            <div key={item.id}>
              <div
                className={textClass}
                onClick={() => setActiveMenu(item.name)}
              >
                {item.name}
              </div>
            </div>
          )
        })}
      </div>
      <div className='flex-1 text-right'>
        <button className='bg-yellow-500 rounded p-2 px-6 text-white'>
          Book now
        </button>
      </div>
    </div>
  )
}

export default Header
