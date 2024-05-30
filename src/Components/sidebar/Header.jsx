import React from 'react';
import settings from "../../assets/settings.svg";
import notification from "../../assets/Notif.svg";
import line from "../../assets/Line.svg";
import search from "../../assets/Search.svg";
import white from "../../assets/White.svg";

const Header = () => {
    let Links =[
        {name: 'Mas Budi', link: '/'},
        {name: 'Manager', link: '/'},
    ]
    return (
        <div className='bg-white-600 w-full h-screen'>
        <div className='shadow-md w-full fixed top-0 left-0'>
            
            <div className='md:px-10 py-4 px-7 h-16 md:flex justify-between items-center bg-[#BDD8B0]'>
                
                {/* logo here */}

                <div className='flex text-2xl items-center gap 2 space-x-[60px]'>
                    <div className="input-container">
                    <img src={search} className="img bg-white px-3" />
                    <input type="text" className="input appearance-none font-sans font-semibold text-[21px] block w-full bg-white text-gray-700 border border-gray-200 rounded-full py-1 px-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Search" />
                </div>
                </div>

                

                {/* nav link */}
                
                <div className="space-x-[10px] md:flex">
                <ul className = 'pl-9 md:pl-0'>
                    {
                        Links.map(link => (
                            <li className='font-sans font-semibold text-sm pr-1 my-7 md:my-0 md:ml-1'>
                            <a href='/'> {link.name}</a>
                            </li>
                        ))
                    }
                    
                </ul>
                
                <button className="w-10"><img src={white}></img></button>
                <img className="h-9 pr-2" src={line}></img>
                <button className="w-7"><img src={notification}></img></button>
                <button className="mr-2 w-7"><img src={settings}></img></button>
                </div>
            </div>
            </div>
        </div>
  );
};

export default Header;