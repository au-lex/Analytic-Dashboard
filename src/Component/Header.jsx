import React, { useState } from 'react';
import logo from '../assets/logo.png'
import dash from '../assets/dash.png'
import { BsPersonFill, BsGear, BsBoxArrowRight } from 'react-icons/bs';
import { FiMenu } from "react-icons/fi";
import prof from '../assets/profile-2user.png'
import group from '../assets/Group.png'
import { FaBell } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs';

import trd from '../assets/trending-up.png'
import box from '../assets/box.png'

import dis from '../assets/discount-shape.png'
import info from '../assets/info-circle.png'
import sun from '../assets/sun.png'
import logout from '../assets/logout.png'
import inlog from '../assets/inlog.png'
import profile from '../assets/Profile.png'
import moon from '../assets/moon 1.png'
import { FaChevronDown } from "react-icons/fa6";
import { GoBell } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CiFileOn } from "react-icons/ci";
import { CgMenuRound } from "react-icons/cg";
import Chart from './Chart1'
const Header = ({ chartData }) => {
  
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const [selectedDay, setSelectedDay] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
   const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

   const selectDay = (day) => {
    setSelectedDay(day);
    setIsDropdownOpen(false);
  };


   const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const closeNotification = () => {
    setIsNotificationOpen(false);
  };

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const [isSidebarOpens, setSidebarOpens] = useState(false);

  const toggleSidebars = () => {
    setSidebarOpens(!isSidebarOpens);
  };

  
  return (
    <>
  {/* Overlay */}
  {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
    {/* mobile */}

<section className="mobile lg:hidden">

  
<section
        className={`sidebar ${isSidebarOpen ? 'block' : 'hidden'} p-4 w-[20%] mr-[1rem] g lg:block z-50 fixed h-[100vh] border-r bg-slate-50 border-gray-200`}
      >
       {/* <div className='relative ml-['>

        <button
          className="absolute top-[10rem]  right-[10rem] text-gray-500"
          onClick={toggleSidebar}
          >
         
          Close
        </button>

          </div> */}
        <div className="logo mb-4">
          <img src={logo} alt="" />
        </div>

        <div className="logo mb-6 ">
          <img src={dash} alt="" />
        </div>

        <div className="logo mb-6">
          <img src={prof} alt="" />
        </div>

        <div className="logo mb-6">
          <img src={box} alt="" />
        </div>

        <div className="logo mb-6">
          <img src={dis} alt="" />
        </div>

        <div className="logo mb-6">
          <img src={info} alt="" />
        </div>

        <div className="logo mb-6">
          <img src={sun} alt="" />
        </div>

        <div className="logo mb-6">
          <img src={moon} alt="" />
        </div>

        <section className="dwn mt-[6rem]">
          <div className="logo mb-6">
            <img src={logout} alt="" />
          </div>

          <div className="logo mb-6">
            <img src={dis} alt="" />
          </div>

          <div className="logo mb-6">
            <img src={inlog} alt="" />
          </div>
        </section>
      </section>

<div className='flex1 g'>


<section className='shadow-sm  w-[100%] h-[11vh]  z-40 bg-white 
 px-[1rem] border-b border-gray-200 py-4'>



<nav className='flex justify-between  space-x-4'>
<div className='w-full flex'>
<div className="logo mb-4 mr-2 ">
    <img src={logo} alt="" />
  </div>
<h2 className='font-semibold text-[1.3rem] '>Dashboard</h2>
</div>

    <div onClick={toggleSidebars} className="profile flex  justify-between w-[100%]  shadow-sm border  h-[3rem] rounded-full">
    <div className="logo pl-2 pt-1">
    <img src={profile} alt="profile" />
  </div>
  <div className="profileText">
    <h2 className='text-[12px]  font-semibold'>Juston Bergson</h2>
    <p className='text-[12px]'> Juston@gmail.com</p>
  </div>
  <div className="drop pt-3 pr-3">

  <FaChevronDown  />
  </div>
  <div className="origin-top-right right-0 mt-2 w-48 absolute top-16 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
 
 {isSidebarOpens && (
   <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
     <a
       href="#"
       className="block px-4 py-2 text-sm hover:bg-purple-100 hover:text-purple-900"
       role="menuitem"
     >
       <BsPersonFill className="inline-block mr-2" /> Edit Profile
     </a>
     <a
       href="#"
       className="block px-4 py-2 text-sm hover:bg-purple-100 hover:text-purple-900"
       role="menuitem"
     >
       <BsGear className="inline-block mr-2" /> Settings
     </a>
     <a
       href="#"
       className="block px-4 py-2 text-sm text-red-700 hover:bg-red-100 hover:text-red-900"
       role="menuitem"
     >
       <BsBoxArrowRight className="inline-block mr-2" /> Sign out
     </a>
   </div>
 )}
</div>
    </div> 
</nav>


</section>
<div className="cla px-4 pt-4">

<section className="inputCon  w-[100%] relative g  ">
<span className='absolute top-[.5rem] left-3'><CiSearch /></span>
        <input type="text" placeholder='Search...' className='  w-[100%] px-8  shadow-sm border   py-[4px] rounded-full' />
    </section>

    <div className="notif flex justify-between  pt-4 w-full  h-[3rem]  rounded-full  py-2">
      <span className="cal flex space-x-2 ">
        <span onClick={toggleSidebar} className='b  '>

      <FiMenu className='text-[1.5rem]' />
        </span>
        <span className='pt-1'>

      <IoCalendarOutline />
        </span>
      <h2 className='font-semibold'>November 15, 2023</h2>
      </span>
<div className="bell w-[2rem] h-[2rem] border-slate-200 shadow-sm  pl-2 pt-2 border rounded-full">
<GoBell  onClick={toggleNotification} />
<div className="relative inline-block text-left">
    

    {isNotificationOpen && (
      <div
        className="origin-top-right absolute top-2 right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
        onBlur={closeNotification}
      >
        <div className="py-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <div className="flex items-center px-4 py-2 border-b">
            <h3 className="text-lg font-semibold">Notifications</h3>
          </div>
          {/* Notification items go here */}
          <div className="p-4">
            <div className="mb-4">
              <p className="text-sm text-gray-700">
               
              </p>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-700">
              empty message
              </p>
            </div>
            {/* Add more notification items as needed */}
          </div>
        </div>
      </div>
    )}
  </div>
</div>
    </div>
    </div>
</div>

<div data-aos="fade-up" className="mobileChart px-2 lg:hidden mt-4">



<div className="sales border shadow-sm w-full rounded-[10px] h-[15rem] mt-2">
<section className="desc flex justify-between px-[1rem] pt-1">
  <h1 className='capitalize  font-semibold'>sales trend</h1>
  <span className='flex '>
    <h2 className='mr-2'>Shotby:</h2>
    <div className=" flex   space-x-4 shadow-sm border  px-2 py-1 w-[60%] rounded-full">
       
      <div className="">
        <h2 className='text-[12px]  '>Weekly</h2>
        
      </div>
      <div className="pt-1">

      <FaChevronDown className='text-slate-600 text-[12px]'  />
      </div>
        </div>
  </span> 
</section>

<div className='  w-full flex px-[1rem] justify-center'>

<Chart chartData={chartData} />
</div>
        </div>
        </div>

        <div className="sales flex flex-wrap rounded-[10px] items-center  pt-[2rem]  lg:w-[50%] w-full lg:h-[50vh]">
    <div data-aos="fade-up" className="total-order lg:w-[47%] w-[45%] border shadow-sm h-[28vh] m-2 rounded-[10px]">

    <div className="no w-[100%] flex justify-between px-[1rem] pt-3   h-[3rem]  rounded-full  py-2">
    <div className=" w-[2rem] h-[2rem]
     border-slate-200 shadow-sm   pt-2  rounded-full">
    <img src='https://res.cloudinary.com/durbee4ln/image/upload/v1706288951/Icon_2_ycvlsv.png' alt="" />
</div>
       
          <img src='https://res.cloudinary.com/durbee4ln/image/upload/v1706288952/Group_3_h5xn3s.png' alt="" />
 </div>
 <section className="ord pt-2 px-4">


 <h2 className='text-slate-600 text-[16px]'>Total Order</h2>
 <h2 className='font-semibold text-[25px]'>350</h2>
 </section>

        <section className="desc flex space-x-4 justify-betwee px-[1rem] pt-2">
        <span className=' px-2 space-x-1 bg-green-200 h-[3rem] w-[3rem] rounded-full '>
   
    <div className="pt-2  w-[100%] rounded-full">
       
      <img src={group} alt="" />

     
        </div>
        <h2 className='text-[12px] text-green-800 '>23.5%</h2>                                   
  </span>
  <h1 className='capitalize text-[15px]  '>vs.previous month</h1>
  
</section>
    </div>

    <div data-aos="fade-up" className="total-order lg:w-[47%]  w-[45%] border shadow-sm h-[28vh] m-2 rounded-[10px]">

<div className="no w-[100%] flex justify-between px-[1rem] pt-3   h-[3rem]  rounded-full  py-2">
<div className=" w-[2rem] h-[2rem]
 border-slate-200 shadow-sm   pt-2  rounded-full">
  <img src='https://res.cloudinary.com/durbee4ln/image/upload/v1706288951/Icon_2_ycvlsv.png' alt="" />
{/* <img src={ic} alt="" /> */}
</div>
   
      <img src='https://res.cloudinary.com/durbee4ln/image/upload/v1706288951/Vector_2_djr6r9.png' alt="" />
</div>
<section className="ord pt-2 px-4">


<h2 className='text-slate-600 text-[16px]'>Total Refund</h2>
<h2 className='font-semibold text-[25px]'>270</h2>
</section>

    <section className="desc flex space-x-4 justify-betwee px-[1rem] pt-2">
    <span className=' px-2 space-x-2 bg-red-200  h-[3rem] w-[3rem]  rounded-full '>

<div className="pt-2  w-[100%] rounded-full">
   
  <img src={trd} alt="" />

 
    </div>
    <h2 className='text-[12px] text-red-800 '>23.5%</h2>                                   
</span>
<h1 className='capitalize text-[15px]  '>vs.previous month</h1>

</section>
</div>

<div data-aos="fade-up" className="total-order lg:w-[47%]  w-[45%] border shadow-sm h-[28vh] m-2 rounded-[10px]">

<div className="no w-[100%] flex justify-between px-[1rem] pt-3   h-[3rem]  rounded-full  py-2">
<div className=" w-[2rem] h-[2rem]
 border-slate-200 shadow-sm   pt-2  rounded-full">
<img src='https://res.cloudinary.com/durbee4ln/image/upload/v1706288951/Icon_2_ycvlsv.png' alt="" />
</div>
   
      <img src='https://res.cloudinary.com/durbee4ln/image/upload/v1706288951/Vector_2_djr6r9.png' alt="" />
</div>
<section className="ord pt-2 px-4">


<h2 className='text-slate-600 text-[16px]'>Average Sales</h2>
<h2 className='font-semibold text-[25px]'>1,567</h2>
</section>

    <section className="desc flex space-x-4 justify-betwee px-[1rem] pt-2">
    <span className=' px-2 space-x-2 bg-red-200  h-[3rem] w-[3rem]  rounded-full '>

<div className="pt-2  w-[100%] rounded-full">
   
  <img src={trd} alt="" />

 
    </div>
    <h2 className='text-[12px] text-red-800 '>23.5%</h2>                                   
</span>
<h1 className='capitalize text-[15px]  '>vs.previous month</h1>

</section>
</div>

<div data-aos="fade-up" className="total-order lg:w-[47%]  w-[45%] border shadow-sm h-[28vh] m-2 rounded-[10px]">

    <div className="no w-[100%] flex justify-between px-[1rem] pt-3   h-[3rem]  rounded-full  py-2">
    <div className=" w-[2rem] h-[2rem]
     border-slate-200 shadow-sm   pt-2  rounded-full">
    <img src='https://res.cloudinary.com/durbee4ln/image/upload/v1706288951/Icon_2_ycvlsv.png' alt="" />
</div>
       
          <img src='https://res.cloudinary.com/durbee4ln/image/upload/v1706288952/Group_3_h5xn3s.png' alt="" />
 </div>
 <section className="ord pt-2 px-4">


 <h2 className='text-slate-600 text-[16px]'>Total Income</h2>
 <h2 className='font-semibold text-[25px]'>$350.000</h2>
 </section>

        <section className="desc flex space-x-4 justify-betwee px-[1rem] pt-4">
        <span className=' px-2 space-x-1 bg-green-200 h-[3rem] w-[3rem] rounded-full '>
   
   <div className="pt-2  w-[100%] rounded-full">
      
     <img src={group} alt="" />

    
       </div>
       <h2 className='text-[12px] text-green-800 '>23.5%</h2>                                   
 </span>
  <h1 className='capitalize text-[15px]  '>vs.previous month</h1>
  
</section>
    </div>

</div>

  <div className=''>

  <div className="user px-[1rem]">

  
  <div class="overflow-x-auto  mt-[2rem]">
  <table className = 'min-w-full'>
  <tr data-aos="fade-up">
    <th className='text-slate-700  text-[15px]  font-light'>Name</th>
    <th className='text-slate-700 text-[15px]   font-light' >Date</th>
    <th className='text-slate-700 text-[15px]  font-light'>Amount</th>
    <th className='text-slate-700 text-[15px]   font-light'>Status</th>
    <th className='text-slate-700  text-[15px] font-light'>Invoice</th>
  </tr>
  <tr>
    <td className='flex space-x-2'>
    <span className='w-[40px] h-[40px]'><img className='w-full' src={profile} alt="" /></span>
      <h1 className='   font-semibold text-slate-800 text-[15px]'>  Marcos Bergson</h1>
    </td>
    <td  className='text-[10px] w-full'>Nov 15, 2023</td>
    <td className='   text-[14px] font-semibold text-slate-800'>$80,000</td>
    <td  className='text-[14px]'>Paid</td>
    <td className='flex space-x-1 '>
    <span >

    <CiFileOn />
    </span>
      <h1 className='   text-[14px]'>Veiw</h1>
    </td>

  </tr>
  <tr data-aos="fade-up">
  <td className='flex space-x-2'>
  <span className='w-[40px] h-[40px]'><img className='w-full' src={profile} alt="" /></span>
      <h1 className='   font-semibold text-slate-800 text-[15px]'> Jaydon Vaccro</h1>
    </td>
    
    <td  className='text-[10px]'>Nov 15, 2023</td>
    <td className='   text-[14px] font-semibold text-slate-800'>$80,000</td>
    <td  className='text-[14px]'>Refund</td>
    <td className='flex space-x-1 '>
    <span >

    <CiFileOn />
    </span>
      <h1 className='   text-[14px]'>Veiw</h1>
    </td>
  </tr>
  <tr data-aos="fade-up">
  <td className='flex space-x-2'>
  <span className='w-[40px] h-[40px]'><img className='w-full' src={profile} alt="" /></span>
      <h1 className='  font-semibold text-slate-800 text-[15px]'>Corey Schleifer</h1>
    </td>
   
    <td  className='text-[10px]'>Nov 15, 2023</td>
    <td className='   text-[14px] font-semibold text-slate-800'>$80,000</td>
    <td  className='text-[14px]'>Paid</td>
    <td className='flex space-x-1 '>
    <span >

    <CiFileOn />
    </span>
      <h1 className='   text-[14px]'>Veiw</h1>
    </td>
  </tr>
  <tr data-aos="fade-up">
  <td className='flex space-x-2'>
      <span className='w-[40px] h-[40px]'><img className='w-full' src={profile} alt="" /></span>
      <h1 className='  font-semibold text-slate-800 text-[15px]'> Cooper press</h1>
    </td>
   
    <td  className='text-[10px]'>Nov 15, 2023</td>
    <td className='   text-[14px] font-semibold text-slate-800'>$80,000</td>
    <td  className='text-[14px]'>Refund</td>
    <td className='flex space-x-1 '>
    <span >

    <CiFileOn />
    </span>
      <h1 className='   text-[14px]'>Veiw</h1>
    </td>
  </tr>
  <tr data-aos="fade-up">
  <td className='flex space-x-2'>
  <span className='w-[40px] h-[40px]'><img className='w-full' src={profile} alt="" /></span>
      <h1 className='  font-semibold text-slate-800 text-[15px]'> Phlip rubin</h1>
    </td>
    
    <td  className='text-[10px]'>Nov 15, 2023</td>
    <td className='   text-[14px] font-semibold text-slate-800'>$80,000</td>
    <td className='text-[14px]'>Paid</td>
    <td className='flex space-x-1 '>
    <span >

    <CiFileOn />
    </span>
      <h1 className='   text-[14px]'>Veiw</h1>
    </td>
  </tr>
  
</table>
</div>
</div>
<section className="tabC px-[.5rem]">


<div className="sales flex flex-wrap  rounded-[10px] mt-[2rem]  items-center w-[100%]  h-[50vh]">
    <div className="total-order w-[100%] border shadow-sm px-[1rem]  mt-2  rounded-[10px]">

    <section className="desc flex justify-between  pt-4 mb-4">
  <h1 className='capitalize  font-semibold'>TopPlatform </h1>
  <span className='flex '>
    <h2 className='text-green-400 font-semibold'>See All</h2>
   
  </span>

 
</section>


<div>






<span >
 <label data-aos="fade-up" className='block font-semibold' htmlFor="">Book Bazaar</label>
<meter data-aos="fade-up" className='w-full h-[1.5rem]' id="diskE" value="6" min="0" max="10" low="9"></meter>
<section className="desc flex justify-between pt-2">
  <h1 className='capitalize  '>$2,500 000 </h1>
  <span className='flex '>
    <h2 className=''>+15%</h2>
   
  </span>
  
 
</section>

</span>


<span>
 <label data-aos="fade-up" className='block font-semibold' htmlFor="">Artisian Asile</label>
<meter data-aos="fade-up" className='w-full h-[1.5rem] ' id="diskA" value="5" min="0" max="10" low="9"></meter>
<section className="desc flex justify-between pt-2">
  <h1 className='capitalize  '>$1,800 000 </h1>
  <span className='flex '>
    <h2 className=''>+13%</h2>
   
  </span>
  
 
</section>

</span>


<span>
 <label data-aos="fade-up" className='block font-semibold' htmlFor="">Toy Troop</label>
<meter data-aos="fade-up" className='w-full h-[1.5rem]' id="diskB" value="4" min="0" max="10" low="9"></meter>
<section className="desc flex justify-between pt-2">
  <h1 className='capitalize  '>$1,200 000 </h1>
  <span className='flex '>
    <h2 className=''>+12%</h2>
   
  </span>
  
 
</section>

</span>


<span>
 <label data-aos="fade-up" className='block font-semibold' htmlFor="">Xstore</label>
<meter data-aos="fade-up" className='w-full h-[1.5rem]' id="diskC" value="3" min="0" max="10" low="9"></meter>
<section className="desc flex justify-between pt-2">
  <h1 className='capitalize  '>$1,000 000 </h1>
  <span className='flex '>
    <h2 className=''>+10%</h2>
   
  </span>
  
 
</section>

</span>

<span  >
 <label data-aos="fade-up" className='block font-semibold' htmlFor="">Book Bazaar</label>
<meter data-aos="fade-up" className='w-full h-[1.5rem]' id="diskD" value="2" min="0" max="10" low="9"></meter>
<section className="desc flex justify-between pt-2">
  <h1 className='capitalize  '>$800 000 </h1>
  <span className='flex '>
    <h2 className=''>+8%</h2>
   
  </span>
  
 
</section>

</span>



</div>
    </div>
    
</div>
</section>
</div>
</section>


{/* desktop */}
    <main className="m hidden lg:block md:hidden">

   

    <div className='flex1 g'>

   


    <section className='shadow-sm  w-[100%] h-[11vh]
      z-40 bg-white fixed px-[1rem] border-b border-gray-200 py-4'>
    
  <nav className='flex justify-between space-x-4'>
    <div className='w-full flex'>
    <div className="logo mb-4  lg:g">
        <img src={logo} alt="" />
      </div>
    <h2 className='font-semibold text-[1.5rem] lg:ml-[2rem]'>Dashboard</h2>
    </div>
  <section className="inputCon  w-[50%] relative g  ">
    <span className='absolute top-[.5rem] left-3'><CiSearch /></span>
            <input type="text" placeholder='Search...' className='  w-[100%] px-8  shadow-sm border   py-[4px] rounded-full' />
        </section>

        <div className="notif lg:w-[45%] w-full g    lg:flex justify-between px-[2rem]   h-[3rem]  rounded-full  py-2">
          <span className="cal flex space-x-2 ">
            <span className='pt-1'>

          <IoCalendarOutline />
            </span>
          <h2 className='font-semibold'>November 15, 2023</h2>
          </span>
<div className="bell w-[2rem] relative h-[2rem] border-slate-200 shadow-sm  pl-2 pt-2 border rounded-full">
<GoBell  onClick={toggleNotification} />

 <div className="relative inline-block text-left">
    

      {isNotificationOpen && (
        <div
          className="origin-top-right absolute top-2 right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
          onBlur={closeNotification}
        >
          <div className="py-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <div className="flex items-center px-4 py-2 border-b">
              <h3 className="text-lg font-semibold">Notifications</h3>
            </div>
            {/* Notification items go here */}
            <div className="p-4">
              <div className="mb-4">
                <p className="text-sm text-gray-700">
                 
                </p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-700">
                empty message
                </p>
              </div>
              {/* Add more notification items as needed */}
            </div>
          </div>
        </div>
      )}
    </div>
</div>
        </div>
        <div onClick={toggleSidebars} className="profile flex   cursor-pointer  justify-between lg:w-[40%] w-full shadow-sm border  h-[3rem] rounded-full">
        <div className="logo pl-2 pt-1">
        <img src={profile} alt="profile" />
      </div>
      <div className="profileText">
        <h2 className='text-[15px]  font-semibold'>Juston Bergson</h2>
        <p className='text-[12px]'> Juston@gmail.com</p>
      </div>
      <div className="drop pt-3 pr-3">

      <FaChevronDown  />
      </div>
      <div className="origin-top-right right-0 mt-2 w-48 absolute top-16 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
 
  {isSidebarOpens && (
    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
      <a
        href="#"
        className="block px-4 py-2 text-sm hover:bg-purple-100 hover:text-purple-900"
        role="menuitem"
      >
        <BsPersonFill className="inline-block mr-2" /> Edit Profile
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-sm hover:bg-purple-100 hover:text-purple-900"
        role="menuitem"
      >
        <BsGear className="inline-block mr-2" /> Settings
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-red-700 hover:bg-red-100 hover:text-red-900"
        role="menuitem"
      >
        <BsBoxArrowRight className="inline-block mr-2" /> Sign out
      </a>
    </div>
  )}
</div>

        </div> 
  </nav>
    
   
    </section>
    </div>


{/* herro */}
    <section className="hero flex">

   <section className="sidbar p-4 w-[5%] mr-[1rem] g lg:block  z-50 fixed h-[100vh] border-r bg-slate-50 border-gray-200">
      <div className="logo mb-4">
        <img src={logo} alt="" />
      </div>

      <div className="logo mb-6 ">
        <img src={dash} alt="" />
      </div>
      <div className="logo mb-6">
        <img src={prof} alt="" />
      </div>

      

      <div className="logo mb-6">
        <img src={box} alt="" />
      </div>
      <div className="logo mb-6">
        <img src={dis} alt="" />
      </div>

      <div className="logo mb-6">
        <img src={info} alt="" />
      </div>

      <div className="logo mb-6">
        <img src={sun} alt="" />
      </div>

      <div className="logo mb-6">
        <img src={moon} alt="" />
      </div>


<section className="dwn mt-[6rem]">

     

      <div className="logo mb-6">
        <img src={logout} alt="" />
      </div>

      <div className="logo mb-6">
        <img src={dis} alt="" />
      </div>

      <div className="logo mb-6">
        <img src={inlog} alt="" />
      </div>
</section>
      

    </section> 
 
    <main  data-aos="fade-up"  className='     lg pt-[5rem] lg:ml-[5rem]'>
       
      
       <div className='dash-Container flex  lg:flex-nowrap flex-wrap w-full justify-between space-x-6 mb-[1rem]'>

        <div className="sales border shadow-sm w-full lg:w-[60%] rounded-[10px] h-[52vh] mt-2">
<section className="desc flex justify-between px-[1rem] pt-1">
  <h1 className='capitalize  font-semibold'>sales trend</h1>
  <span className='flex '>
    <h2 className='mr-2'>Shotby:</h2>
    <div  onClick={toggleDropdown} className=" flex   space-x-4 shadow-sm border  px-2 py-1 w-[60%] rounded-full">
       
      <div className="">
        <h2 className='text-[12px]  '>Weekly</h2>
        
      </div>
      <div className="pt-1">

      <FaChevronDown className='text-slate-600 text-[12px]'  />
      </div>
       <div className="relative inline-block text-left">
      

      {isDropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 top-6 z-50 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {daysOfWeek.map((day, index) => (
              <button
                key={index}
                onClick={() => selectDay(day)}
                className={`block px-4 py-2 text-sm ${
                  selectedDay === day ? 'bg-indigo-500 text-white' : 'text-gray-800 hover:bg-gray-200'
                }`}
                role="menuitem"
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
        </div>
  </span> 
</section>

<div className='  w-full flex px-[1rem] justify-center'>

<Chart chartData={chartData} />
</div>
        </div>
{/* order summary */}

        <div className="sales flex flex-wrap rounded-[10px]
         items-center    lg:w-[50%] w-full lg:h-[50vh]">
    <div className="total-order lg:w-[47%] w-[45%] border shadow-sm h-[25vh] m-2 rounded-[10px]">

    <div className="no w-[100%] flex justify-between px-[1rem] pt-3   h-[3rem]  rounded-full  py-2">
    <div className=" w-[2rem] h-[2rem]
     border-slate-200 shadow-sm   pt-2  rounded-full">
    <img src='https://res.cloudinary.com/durbee4ln/image/upload/v1706288951/Icon_2_ycvlsv.png' alt="" />
</div>
       
          <img src='https://res.cloudinary.com/durbee4ln/image/upload/v1706288952/Group_3_h5xn3s.png' alt="" />
 </div>
 <section className="ord pt-2 px-4">


 <h2 className='text-slate-600 text-[16px]'>Total Order</h2>
 <h2 className='font-semibold text-[25px]'>350</h2>
 </section>

        <section className="desc flex space-x-4 justify-betwee px-[1rem] pt-4">
        <span className='flex px-2 space-x-2 bg-green-200   rounded-full '>
   
    <div className="pt-2  w-[100%] rounded-full">
       
      <img src={group} alt="" />

     
        </div>
        <h2 className='text-[12px] text-green-800 '>23.5%</h2>                                   
  </span>
  <h1 className='capitalize text-[15px]  '>vs.previous month</h1>
  
</section>
    </div>

    <div className="total-order lg:w-[47%]  w-[45%] border shadow-sm h-[25vh] m-2 rounded-[10px]">

<div className="no w-[100%] flex justify-between px-[1rem] pt-3   h-[3rem]  rounded-full  py-2">
<div className=" w-[2rem] h-[2rem]
 border-slate-200 shadow-sm   pt-2  rounded-full">
  <img src='https://res.cloudinary.com/durbee4ln/image/upload/v1706288951/Icon_2_ycvlsv.png' alt="" />
{/* <img src={ic} alt="" /> */}
</div>
   
      <img src='https://res.cloudinary.com/durbee4ln/image/upload/v1706288951/Vector_2_djr6r9.png' alt="" />
</div>
<section className="ord pt-2 px-4">


<h2 className='text-slate-600 text-[16px]'>Total Refund</h2>
<h2 className='font-semibold text-[25px]'>270</h2>
</section>

    <section className="desc flex space-x-4 justify-betwee px-[1rem] pt-4">
    <span className='flex px-2 space-x-2 bg-red-200   rounded-full '>

<div className="pt-2  w-[100%] rounded-full">
   
  <img src={trd} alt="" />

 
    </div>
    <h2 className='text-[12px] text-red-800 '>23.5%</h2>                                   
</span>
<h1 className='capitalize text-[15px]  '>vs.previous month</h1>

</section>
</div>

<div className="total-order lg:w-[47%]  w-[45%] border shadow-sm h-[25vh] m-2 rounded-[10px]">

<div className="no w-[100%] flex justify-between px-[1rem] pt-3   h-[3rem]  rounded-full  py-2">
<div className=" w-[2rem] h-[2rem]
 border-slate-200 shadow-sm   pt-2  rounded-full">
<img src='https://res.cloudinary.com/durbee4ln/image/upload/v1706288951/Icon_2_ycvlsv.png' alt="" />
</div>
   
      <img src='https://res.cloudinary.com/durbee4ln/image/upload/v1706288951/Vector_2_djr6r9.png' alt="" />
</div>
<section className="ord pt-2 px-4">


<h2 className='text-slate-600 text-[16px]'>Average Sales</h2>
<h2 className='font-semibold text-[25px]'>1,567</h2>
</section>

    <section className="desc flex space-x-4 justify-betwee px-[1rem] pt-4">
    <span className='flex px-2 space-x-2 bg-red-200   rounded-full '>

<div className="pt-2  w-[100%] rounded-full">
   
  <img src={trd} alt="" />

 
    </div>
    <h2 className='text-[12px] text-red-800 '>23.5%</h2>                                   
</span>
<h1 className='capitalize text-[15px]  '>vs.previous month</h1>

</section>
</div>

<div className="total-order lg:w-[47%]  w-[45%] border shadow-sm h-[25vh] m-2 rounded-[10px]">

    <div className="no w-[100%] flex justify-between px-[1rem] pt-3   h-[3rem]  rounded-full  py-2">
    <div className=" w-[2rem] h-[2rem]
     border-slate-200 shadow-sm   pt-2  rounded-full">
    <img src='https://res.cloudinary.com/durbee4ln/image/upload/v1706288951/Icon_2_ycvlsv.png' alt="" />
</div>
       
          <img src='https://res.cloudinary.com/durbee4ln/image/upload/v1706288952/Group_3_h5xn3s.png' alt="" />
 </div>
 <section className="ord pt-2 px-4">


 <h2 className='text-slate-600 text-[16px]'>Total Income</h2>
 <h2 className='font-semibold text-[25px]'>$350.000</h2>
 </section>

        <section className="desc flex space-x-4 justify-betwee px-[1rem] pt-4">
        <span className='flex px-2 space-x-2 bg-green-200   rounded-full '>
   
    <div className="pt-2  w-[100%] rounded-full">
       
      <img src={group} alt="" />

     
        </div>
        <h2 className='text-[12px] text-green-800 '>23.5%</h2>                                   
  </span>
  <h1 className='capitalize text-[15px]  '>vs.previous month</h1>
  
</section>
    </div>

</div>

       </div>


        
       <div className='dash-Container  flex  w-full justify-between lg:space-x-6 mb-[2rem]'>

        <div className="sales border shadow-sm  b-red-500 lg:w-[60%] w-full  rounded-[10px] lg:h-[70vh] mt-2">
<section className="desc flex justify-between px-[1.5rem] pt-4">
  <h1 className='capitalize  font-semibold'>last orders</h1>
  <span className='flex '>
    <h2 className='text-green-400 font-semibold'>See All</h2>
   
  </span>


 
</section>

  <div className='px-2'>

 
  
<table>
  <tr>
    <th className='text-slate-700  text-[15px]  font-light'>Name</th>
    <th className='text-slate-700 text-[15px]   font-light' >Date</th>
    <th className='text-slate-700 text-[15px]  font-light'>Amount</th>
    <th className='text-slate-700 text-[15px]   font-light'>Status</th>
    <th className='text-slate-700  text-[15px] font-light'>Invoice</th>
  </tr>
  <tr>
    <td className='flex space-x-2'>
      <span><img src={profile} alt="" /></span>
      <h1 className='pt-2   font-semibold text-slate-800 text-[15px]'>  Marcos Bergson</h1>
    </td>
    <td  className='text-[14px]'>Nov 15, 2023</td>
    <td className='   text-[14px] font-semibold text-slate-800'>$80,000</td>
    <td  className='text-[14px]'>Paid</td>
    <td className='flex space-x-1 '>
    <span >

    <CiFileOn />
    </span>
      <h1 className='   text-[14px]'>Veiw</h1>
    </td>

  </tr>
  <tr>
  <td className='flex space-x-2'>
      <span><img src={profile} alt="" /></span>
      <h1 className='pt-2   font-semibold text-slate-800 text-[15px]'> Jaydon Vaccro</h1>
    </td>
    
    <td  className='text-[14px]'>Nov 15, 2023</td>
    <td className='   text-[14px] font-semibold text-slate-800'>$80,000</td>
    <td  className='text-[14px] text-red-500'>Refund</td>
    <td className='flex space-x-1 '>
    <span >

    <CiFileOn />
    </span>
      <h1 className='   text-[14px]'>Veiw</h1>
    </td>
  </tr>
  <tr>
  <td className='flex space-x-2'>
      <span><img src={profile} alt="" /></span>
      <h1 className='pt-2   font-semibold text-slate-800 text-[15px]'>Corey Schleifer</h1>
    </td>
   
    <td  className='text-[14px]'>Nov 15, 2023</td>
    <td className='   text-[14px] font-semibold text-slate-800'>$80,000</td>
    <td  className='text-[14px]'>Paid</td>
    <td className='flex space-x-1 '>
    <span >

    <CiFileOn />
    </span>
      <h1 className='   text-[14px]'>Veiw</h1>
    </td>
  </tr>
  <tr>
  <td className='flex space-x-2'>
      <span><img src={profile} alt="" /></span>
      <h1 className='pt-2   font-semibold text-slate-800 text-[15px]'> Cooper press</h1>
    </td>
   
    <td  className='text-[14px]'>Nov 15, 2023</td>
    <td className='   text-[14px] font-semibold text-slate-800'>$80,000</td>
    <td  className='text-[14px]'>Refund</td>
    <td className='flex space-x-1 '>
    <span >

    <CiFileOn />
    </span>
      <h1 className='   text-[14px]'>Veiw</h1>
    </td>
  </tr>
  <tr>
  <td className='flex space-x-2'>
      <span><img src={profile} alt="" /></span>
      <h1 className='pt-2   font-semibold text-slate-800 text-[15px]'> Phlip rubin</h1>
    </td>
    
    <td  className='text-[14px]'>Nov 15, 2023</td>
    <td className='   text-[14px] font-semibold text-slate-800'>$80,000</td>
    <td className='text-[14px]'>Paid</td>
    <td className='flex space-x-1 '>
    <span >

    <CiFileOn />
    </span>
      <h1 className='   text-[14px]'>Veiw</h1>
    </td>
  </tr>
  
</table>

</div>
        </div>
        <div className="sales flex flex-wrap  rounded-[10px] mt-[0rem]  items-center lg:w-[50%] w-full h-[50vh]">
    <div className="total-order w-[100%] border shadow-sm px-[1rem] lg:h-[70vh] mt-2  rounded-[10px]">

    <section className="desc flex justify-between  pt-4 mb-4">
  <h1 className='capitalize  font-semibold'>TopPlatform </h1>
  <span className='flex '>
    <h2 className='text-green-400 font-semibold'>See All</h2>
   
  </span>

 
</section>


<div>






<span>
 <label className='block font-semibold' htmlFor="">Book Bazaar</label>
<meter className='w-full h-[1.5rem]' id="diskE" value="6" min="0" max="10" low="9"></meter>
<section className="desc flex justify-between pt-2">
  <h1 className='capitalize  '>$2,500 000 </h1>
  <span className='flex '>
    <h2 className=''>+15%</h2>
   
  </span>
  
 
</section>

</span>


<span>
 <label className='block font-semibold' htmlFor="">Artisian Asile</label>
<meter className='w-full h-[1.5rem] ' id="diskA" value="5" min="0" max="10" low="9"></meter>
<section className="desc flex justify-between pt-2">
  <h1 className='capitalize  '>$1,800 000 </h1>
  <span className='flex '>
    <h2 className=''>+15%</h2>
   
  </span>
  
 
</section>

</span>


<span>
 <label className='block font-semibold' htmlFor="">Toy Troop</label>
<meter className='w-full h-[1.5rem]' id="diskB" value="4" min="0" max="10" low="9"></meter>
<section className="desc flex justify-between pt-2">
  <h1 className='capitalize  '>$1,200 000 </h1>
  <span className='flex '>
    <h2 className=''>+15%</h2>
   
  </span>
  
 
</section>

</span>


<span>
 <label className='block font-semibold' htmlFor="">Xstore</label>
<meter className='w-full h-[1.5rem]' id="diskC" value="3" min="0" max="10" low="9"></meter>
<section className="desc flex justify-between pt-2">
  <h1 className='capitalize  '>$1,000 000 </h1>
  <span className='flex '>
    <h2 className=''>+15%</h2>
   
  </span>
  
 
</section>

</span>

<span>
 <label className='block font-semibold' htmlFor="">Book Bazaar</label>
<meter className='w-full h-[1.5rem]' id="diskD" value="2" min="0" max="10" low="9"></meter>
<section className="desc flex justify-between pt-2">
  <h1 className='capitalize  '>$800 000 </h1>
  <span className='flex '>
    <h2 className=''>+15%</h2>
   
  </span>
  
 
</section>

</span>



</div>
    </div>
    
</div>

       </div>

    </main>
    </section>
    </main>
    </>
  )
}

export default Header
