import React from 'react'
import Sidebar from "./components/Sidebar";

const Home = () => {
	const compounds = ["Compound A", "Compound B"];
	return (
		<div className='flex'>
			<Sidebar compounds={compounds} />
			hi
		</div>
	)
}

export default Home