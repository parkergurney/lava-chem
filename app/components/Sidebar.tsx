'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const Sidebar = ({ compounds }: { compounds: string[] }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleSidebar = () => setIsCollapsed(!isCollapsed)

  return (
    <div className={`${isCollapsed ? 'w-16' : 'w-48'} p-4 bg-white h-screen flex flex-col transition-all duration-300`}>
      <div className='flex items-center justify-between mb-[100px]'>
        <div className={`flex items-center gap-2 overflow-hidden transition-all duration-300 ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'}`}>
          <Image src="logo.svg" alt="logo" width={24} height={24} />
          <h1 className='font-extrabold text-xl'>FILLER</h1>
        </div>
        <button onClick={toggleSidebar}>
          <Image
            src="chevron-first.svg"
            alt="toggle sidebar"
            width={24}
            height={24}
            className={`transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}
          />
        </button>
      </div>
      {!isCollapsed && (
        <div className='flex flex-col gap-2'>
          <p className='uppercase text-[#666666] text-sm'>Project</p>
          <h3 className='font-semibold text-lg'>Project Name</h3>

          <div className='relative'>
            <select className='border p-2 w-full border-[#E4E4E4] rounded-md outline-none pr-8 appearance-none bg-white text-[#737373]'>
              {compounds.map((compound: string, index: number) => (
                <option key={index} value={compound}>{compound}</option>
              ))}
            </select>
            <div className='absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none'>
              <Image src="chevron-down.svg" alt="dropdown" width={24} height={24} />
            </div>
          </div>

          <div className='mt-4 flex flex-col gap-2'>
            <button className='flex gap-2 p-2 hover:bg-[#F5F4F5] rounded-md cursor-pointer' onClick={() => {}}>
              <Image src="edit.svg" alt="folder" width={14} height={14} />
              <p className='text-[#737373] text-xs text-nowrap'>Edit compound list</p>
            </button>
            <button className='flex gap-2 p-2 hover:bg-[#F5F4F5] rounded-md cursor-pointer' onClick={() => {}}>
              <Image src="plus.svg" alt="folder" width={14} height={14} />
              <p className='text-[#737373] text-xs text-nowrap'>New trial</p>
            </button>
          </div>
        </div>
      )}
      <div className='mt-auto'>
        <div className='flex items-center gap-4'>
          <Image
            src="/heather.png"
            alt="user"
            width={35}
            height={35}
            className='rounded-3xl shrink-0'
          />
          <div className={`overflow-hidden transition-all duration-300 ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'}`}>
            <p className='text-nowrap'>Heather Liu</p>
            <p className='text-xs'>Researcher</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Sidebar