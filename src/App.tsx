import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";

const App: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Router>
            <div className='min-h-screen bg-gray-900'>
                <nav className='bg-[#0f0d0e]'>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                        <div className='flex items-center justify-between h-16'>
                            <div className='flex items-center'>
                                <div className='flex-shrink-0'>
                                    <svg
                                        className='h-8 w-8 text-white'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='currentColor'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    >
                                        <circle cx='12' cy='12' r='10' />
                                        <path d='M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z' />
                                    </svg>
                                </div>
                                <div className='hidden md:block'>
                                    <div className='ml-10 flex items-baseline space-x-4'>
                                        <Link
                                            to='/'
                                            className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                        >
                                            Home
                                        </Link>
                                        <Link
                                            to='/gallery'
                                            className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                        >
                                            Gallery
                                        </Link>
                                        <Link
                                            to='/contact'
                                            className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                        >
                                            Contact
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='md:hidden'>
                                <button
                                    type='button'
                                    className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                    onClick={toggleMenu}
                                >
                                    Menu
                                </button>
                            </div>
                        </div>
                        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
                            <div className='px-2 pt-2 pb-3 space-y-1'>
                                <Link
                                    to='/'
                                    className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                                >
                                    Home
                                </Link>
                                <Link
                                    to='/gallery'
                                    className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                                >
                                    Gallery
                                </Link>
                                <Link
                                    to='/contact'
                                    className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/gallery' element={<Gallery />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
