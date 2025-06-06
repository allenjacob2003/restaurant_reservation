import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoIosLogOut, IoMdAddCircleOutline } from 'react-icons/io'
import { MdAddShoppingCart, MdFormatListBulletedAdd } from 'react-icons/md'





const Sidebar = ({setToken}) => {
  return (
    <div className='w-[25%] min-h-screen border-r-2 border-gray-300 bg-white'>
        <div className='mt-4 px-6'>
            <h2 className='text-[32px] font-bold'>my app</h2>
        </div>
        <div className='flex flex-col gap-4  px-6'>
            <NavLink to="/add" className="flex items-center gap-3 px-6 py-3 border-b-2 border-gray-200 text-gray-600 hover:bg-amber-500 hover:text-white" >
                      <IoMdAddCircleOutline className='text-[35px] text-black' /> 
                      <p className='hidden md:block text-base'>Add Menu</p>

            </NavLink>
            <NavLink  to="/list" className="flex items-center gap-3 px-6 py-3 border-b-2 border-gray-200 text-gray-600 hover:bg-amber-500 hover:text-white">
                     <MdFormatListBulletedAdd className='text-[35px] text-black' />
                     <p className='hidden md:block text-base'>
                        Menu List
                     </p>
            </NavLink>
            <NavLink to="/table" className="flex items-center gap-3 px-6 py-3 border-b-2 border-gray-200 text-gray-600 hover:bg-amber-500 hover:text-white">
            <MdAddShoppingCart  className='text-[35px] text-black' />

                     <p className='hidden md:block text-base'>
                        Reservations
                     </p>
            </NavLink>
            <button onClick={() => setToken("")}
            className='flex items-center gap-3 px-6 py-3 border-b-2 border-gray-200 text-gray-600 hover:bg-amber-500 hover:text-white w-full'>
                <IoIosLogOut className='text-[35px] text-black' />
                <p className='hidden md:block text-base'>Logout</p>
            </button>
        </div>
    </div>
  )
}

export default Sidebar

