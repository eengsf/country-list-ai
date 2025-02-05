'use client';

import MoonIcon from '../iconSVG/MoonIcon';
import UserIn from './UserIn';
import SunIcon from '../iconSVG/SunIcon';
import { useGlobalState } from '@/app/context/GlobalStateContext';

function Navbar() {
  const { theme, toggleTheme } = useGlobalState();
  return (
    <div className="flex justify-between md:px-10 px-6 md:py-6 py-4 items-center bg-dark text-white ">
      <h1 className='font-bold'>Country List</h1>
      <div className="flex gap-5 items-center">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full transition-all duration-300 hover:bg-sunMedium dark:hover:bg-moonThin"
        >
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>

        <UserIn />
      </div>
    </div>
  );
}

export default Navbar;
