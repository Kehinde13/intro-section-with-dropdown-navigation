import React, {useState} from "react";
import logo from '../assets/logo.svg';
import menu from '../assets/icon-menu.svg';
import close from '../assets/icon-close-menu.svg';
import {AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai'
import todo from '../assets/icon-todo.svg';
import calender from '../assets/icon-calendar.svg';
import reminder from '../assets/icon-reminders.svg';

const Navbar = () => {
    const [Nav, setNav] = useState(false);
    const [dropDown, setDropdown] = useState(true);
    const [Company, setCompany] = useState(true);

    const handleNav = () => {
        setNav(!Nav);
    };

    const handleDrop = () => {
        setDropdown(!dropDown);
    };

    const handleCompany = () => {
        setCompany(!Company);
    };
   

    return ( 
      <div>
            <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto font-semibold text-gray-500">
                <img src={logo} alt="logo" className="ml-2"/>
                <div className="hidden md:flex justify-between ml-10 w-full relative">  
                   <ul className="flex space-x-8  mb-3 ">
                        <li className="flex space-x-2" > <a href="#">Features</a>
                            <div onClick={handleDrop} className="mt-1">
                              {dropDown ? <AiOutlineArrowDown /> : <AiOutlineArrowUp/>} 
                            </div>             
                        </li>
                        <li className="flex space-x-2" > <a href="#">Company</a>
                            <div onClick={handleCompany} className="mt-1">
                            {Company ? <AiOutlineArrowDown /> : <AiOutlineArrowUp/>} 
                            </div>             
                        </li>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">About</a></li>  
                    </ul>
                    <div className={!dropDown ? "absolute top-7 -left-7 shadow-xl p-3 rounded ease-in-out duration-500" : " fixed top-[-100px]"}>
                        <ul>
                            <li> <img src={todo} alt="todo" className="float-left m-1" /> To-Do List</li>
                            <li> <img src={calender} alt="calender" className="float-left m-1" /> Calender</li>
                            <li> <img src={reminder} alt="reminder" className="float-left m-1" /> Reminders</li>
                        </ul>
                    </div>
                    <div className={!Company ? "absolute top-7 left-32 shadow-xl p-3 rounded ease-in-out duration-500" :"fixed top-[-100px]" }>
                        <ul>
                            <li>History</li>
                            <li>Our Team</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <ul className="flex space-x-8 ">
                        <li> <a href="#">Login</a> </li>   
                        <li className="border-2 rounded-3xl -mt-1 py-1 px-3 hover:border-black">
                            <a href="#">Register</a>
                        </li>
                    </ul>
                </div>
                
                <div className="mt-16 w-[65%] text-xl h-full md:hidden z-20">
                    <div onClick={handleNav} className='block float-right mr-3 mt-1'>
                    {Nav ? <img src={close} alt="close"/> : <img src={menu} alt="menu"/>}
                    </div> 
                       <div className={Nav ? `h-[700px] ease-in-out duration-500 bg-white px-3 ` : 'fixed right-[-100%]'}>
                            <ul className="flex flex-col space-y-8 mt-12">
                                <li className="flex space-x-2" > <a href="#">Features</a>
                                    <div onClick={handleDrop} className="mt-1">
                                    {dropDown ? <AiOutlineArrowDown /> : <AiOutlineArrowUp/>} 
                                    </div>             
                                </li>
                                    <div className={!dropDown ? "block" : " hidden "}>
                                        <ul className="flex flex-col space-y-4 ml-3">
                                            <li> <img src={todo} alt="todo" className="float-left m-1" /> To-Do List</li>
                                            <li> <img src={calender} alt="calender" className="float-left m-1" /> Calender</li>
                                            <li> <img src={reminder} alt="reminder" className="float-left m-1" /> Reminders</li>
                                        </ul>
                                    </div>
                                <li className="flex space-x-2" > <a href="#">Company</a>
                                    <div onClick={handleCompany} className="mt-1">
                                    {Company ? <AiOutlineArrowDown /> : <AiOutlineArrowUp/>}  
                                    </div>             
                                </li>
                                <div className={!Company ? "block" : " hidden" }>
                                    <ul className="flex flex-col space-y-4 ml-3" >
                                        <li>History</li>
                                        <li>Our Team</li>
                                        <li>Blog</li>
                                    </ul>
                                </div>
                                <li><a href="#">Career</a></li>
                                <li><a href="#">About</a></li>  
                            </ul>
                            
                            <ul className="text-center flex flex-col space-y-6 mt-6 mr-2">
                                <li> <a href="#">Login</a> </li>   
                                <li className="border-2 rounded-2xl py-1 hover:border-black">
                                    <a href="#">Register</a>
                                </li>
                            </ul> 
                       </div>
                        
                </div>
           
            </div>
           
        
        </div>
     );       
                   
}
 
export default Navbar;                   
                   
                   
                   
                    
                   
        
