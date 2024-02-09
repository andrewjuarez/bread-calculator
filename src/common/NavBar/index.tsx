import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = (): void => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className='bg-gray-800 p-4 relative'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/' className='text-white text-2xl font-bold'>
          Baking Tools
        </Link>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
          {showMenu && (
            <div className='absolute top-full left-0 w-full bg-gray-800 py-4 px-2' onClick={() => { setShowMenu(false); }}>
              <ul className='flex flex-col space-y-4'>
                <li>
                  <Link
                    to='/'
                    className='text-white hover:text-gray-300 block'
                  >
                    Sourdough Calculator
                  </Link>
                </li>
                <li>
                  <Link
                    to='/starter-calculator'
                    className='text-white hover:text-gray-300 block'
                  >
                    Starter Calculator
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
