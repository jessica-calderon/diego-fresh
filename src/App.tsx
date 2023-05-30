import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import { Navigate } from "react-router-dom";

const App: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <Router basename='/diego-fresh'>
            <div className='min-h-screen bg-[#0f0d0e]'>
                <nav className='bg-[#0f0d0e]'>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                        <div className='flex items-center justify-between h-16'>
                            <div className='flex items-center'>
                                <div className='flex-shrink-0'>
                                    <Link to='/home' className='hover:text-gray-500'>
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
                                    </Link>
                                </div>
                                <div className='hidden md:block'>
                                    <div className='ml-10 flex items-baseline space-x-4'>
                                        <Link
                                            to='/home'
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
                                    onClick={closeMenu}
                                    to='/home'
                                    className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 border-b text-base border-[#1d1c21] font-medium'
                                >
                                    Home
                                </Link>
                                <Link
                                    onClick={closeMenu}
                                    to='/gallery'
                                    className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 border-b text-base border-[#1d1c21] font-medium'
                                >
                                    Gallery
                                </Link>
                                <Link
                                    onClick={closeMenu}
                                    to='/contact'
                                    className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 text-base font-medium'
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path='/' element={<Navigate to='/home' replace />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/gallery' element={<Gallery />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
