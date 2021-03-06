import React, {useState} from "react";
import { SiDatabricks } from "react-icons/si";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div name='home' className="w-full absolute z-10">
      <div className="max-w-[1240px] h-20 mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <SiDatabricks className="mt-2 mr-3 primaryColor" size={44} />
          <h1 className="text-5xl font-bold text-white"><Link to='/'>Secured.</Link></h1>
        </div>
        <ul className="hidden md:flex items-center font-bold">
            <li className="p-4 text-white/80 hover:text-white"><Link to='/'>Home</Link></li>
            <li className="p-4 text-white/80 hover:text-white"><Link to='/recovery'>Recovery</Link></li>
            <li className="p-4 text-white/80 hover:text-white"><Link to='/cloud'>Cloud</Link></li>
            <li className="p-4 text-white/80 hover:text-white"><Link to='/contact'>Contact</Link></li>
            <button className="ml-4">Sign in</button>
        </ul>

        {/* Hamburger Menu */}
        <div onClick={handleNav} className='block mt-4 md:hidden'>
            { nav ? <AiOutlineClose size={24} className='text-white cursor-pointer' /> : <AiOutlineMenu size={24} className='text-white cursor-pointer' /> }
        </div>

        {/* Mobile Menu */}
        <div className={nav ? 'w-6/12 p-3 bg-black/70 font-bold rounded-md absolute top-20 right-3 flex transition-all duration-700' : 'absolute right-[100%]'}>
            <ul>
              <li className="p-4 text-white/80 hover:text-white"><Link to='/'>Home</Link></li>
              <li className="p-4 text-white/80 hover:text-white"><Link to='/recovery'>Recovery</Link></li>
              <li className="p-4 text-white/80 hover:text-white"><Link to='/cloud'>Cloud</Link></li>
              <li className="p-4 text-white/80 hover:text-white"><Link to='/contact'>Contact</Link></li>
              <button className="ml-2 mt-2">Sign in</button>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
