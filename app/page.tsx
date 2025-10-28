'use client'
import React from 'react'
import Sidebar from "./components/Sidebar";
import Image from 'next/image';

const Home = () => {
	const compounds = ["Compound A", "Compound B"];
	return (
		<div className='flex w-full'>
			<Sidebar compounds={compounds} />
			<div className='flex flex-col w-full p-6 gap-8'>
				<div className='flex w-full gap-2'>
					<div className='bg-white rounded-lg h-13 border border-[#E4E4E4] w-full flex items-center justify-center p-4 gap-8'>
						<Image src="/copy.svg" alt="copy" width={20} height={20} />
						N1CCN(CC1)C(C(F)=C2)=CC(=C2C4=O)N(C3CC3)C=C4C(=O)O
					</div>
					<button onClick={() => { }} className='w-13 bg-white border border-[#E4E4E4] h-13 flex justify-center items-center rounded-lg'>
						<Image src="/chevron-left.svg" alt="previous" width={20} height={20} />
					</button>
					<button onClick={() => { }} className='w-13 bg-white border border-[#E4E4E4] h-13 flex justify-center items-center rounded-lg'>
						<Image src="/chevron-right.svg" alt="next" width={20} height={20} />
					</button>
				</div>
				<div className='w-full h-full flex gap-4'>
					<div className='flex h-full flex-col w-full'>
						<h2 className='uppercase text-xl'>Compound A</h2>
						<div className='relative w-full h-full'>
							<Image src="/chemimage.png" alt="Chemistry Image" fill className='object-contain' />
						</div>
						<p className='text-lg'>Description of Compound</p>
						<p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum tempora harum architecto ratione perspiciatis. Iusto, illum, doloremque distinctio cupiditate odio molestias incidunt vitae ratione aspernatur quisquam cum quam. Non rerum, quaerat quas perspiciatis veritatis omnis velit illo, ab molestias laboriosam cupiditate placeat dolor rem iusto quidem dignissimos asperiores ea iste!</p>
					</div>
					<div className='w-[400px] h-full bg-[#E8E8E8] rounded-lg p-4'>
						
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home