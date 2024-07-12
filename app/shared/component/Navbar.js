"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react'
import { FaTimes } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF } from "react-icons/fa";

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [click, setClick] = useState(false);
    const [currentPath, setCurrentPath] = useState('/');

    const handleClick = () => {
        setClick(!click);
    }

    useEffect(() => {
        // Set the current path when the component mounts
        setCurrentPath(window.location.pathname);

        const handleScroll = () => {
            const offset = window.scrollY;
            setIsSticky(offset > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const menuItems = [
        { path: '/', label: 'Home' },
        { path: '/about-us', label: 'About Us' },
        { path: '/our-services', label: 'Our Services' },
        { path: '/blog', label: 'Blog' },
        { path: '/careers', label: 'Careers' },
        { path: '/contact-us', label: 'Contacts' }
    ];

    const renderMenuItem = (item) => {
        const isActive = currentPath === item.path;
        return (
            <li
                key={item.path}
                onClick={() => window.location.href = item.path}
                className={`cursor-pointer font-semibold text-[#FF6410] border-b-2 transition
                    ${isActive ? 'border-yellow-200' : 'border-transparent hover:border-yellow-200'}`}
            >
                {item.label}
            </li>
        );
    };

    return (
        <nav className={`z-50 ${isSticky ? 'fixed top-0 shadow-md w-full flex justify-center items-center transition duration-300 ease-in-out bg-white' : ''}`}>
            <div className='container z-50 flex justify-between flex-1 p-3 py-4 mx-auto h-12vh lg:py-7'>
                <div onClick={() => window.location.href = "/"} className='flex items-center flex-1 cursor-pointer'>
                    <Image src='/home/Frame.png' alt="" className='h-9' width={200} height={200} />
                </div>
                <div className='items-center justify-end hidden font-normal uppercase lg:flex md:flex lg:flex-1'>
                    <div className='flex-10'>
                        <ul className='flex xl:gap-7 lg:gap-3 text:17px lg:text-[15px] xl:text-[17px] sm:gap-3'>
                            {menuItems.map(renderMenuItem)}
                        </ul>
                    </div>
                </div>
                <div>
                    {click && (
                        <div className='fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col bg-orange-400 lg:hidden'>
                            <div className='flex items-center justify-between p-4 bg-white'>
                                <div onClick={() => window.location.href = "/"} className='cursor-pointer'>
                                    <Image src='/home/Frame.png' alt="OnEngage" className='h-9' width={200} height={200} />
                                </div>
                                <button onClick={handleClick} className='text-2xl text-black'>
                                    <FaTimes />
                                </button>
                            </div>
                            <nav className='flex-grow'>
                                <ul className='text-xl text-white'>
                                    {menuItems.map((item) => (
                                        <li key={item.path} className='p-4 border-b border-orange-300'>
                                            <a href={item.path} className='block'>{item.label}</a>
                                            {item.label === 'OUR SERVICES' && (
                                                <ul className='mt-2 ml-4'>
                                                    <li className='py-2'><a href="#">Interaction Center</a></li>
                                                    <li className='py-2'><a href="#">Outbound & Customer Retention</a></li>
                                                    <li className='py-2'><a href="#">Quality Assurance</a></li>
                                                    <li className='py-2'><a href="#">Analytics & Reporting</a></li>
                                                    <li className='py-2'><a href="#">Agent Type</a></li>
                                                    <li className='py-2'><a href="#">Account Management</a></li>
                                                    <li className='py-2'><a href="#">Other Services</a></li>
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <div className='p-4'>
                                <div className='flex justify-center space-x-4 text-2xl text-white'>
                                    <a href="#"><FaLinkedinIn /></a>
                                    <a href="#"><FaInstagram /></a>
                                    <a href="#"><FaXTwitter /></a>
                                    <a href="#"><FaFacebookF /></a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <button className='block transition sm:hidden' onClick={handleClick}>
                    {click ? <FaTimes /> : <MdMenu className='w-[40px] h-[40px] text-[#FF6410]' />}
                </button>
            </div>
        </nav>
    )
}

export default Navbar