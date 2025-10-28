import React from 'react'
import Image from 'next/image'

interface CompatibilityCardProps {
	name: string
	toxicity: number
	alertType: 'warning' | 'info'
	alertMessage: string
	alertIcon: string
}

const CompatibilityCard = ({ name, toxicity, alertType, alertMessage, alertIcon }: CompatibilityCardProps) => {
	const alertStyles = {
		warning: {
			container: 'bg-[#FFE5E5] border border-[#E9B6B6]',
			text: 'text-red-700'
		},
		info: {
			container: 'bg-[#FFFDE4] border border-[#E8D7B6]',
			text: 'text-yellow-700'
		}
	}

	const styles = alertStyles[alertType]

	return (
		<div className='bg-white rounded-lg p-4'>
			<h3 className='text-sm mb-2'>{name}</h3>
			<div className='text-2xl mb-3'>{toxicity}% toxicity</div>
			<div className={`${styles.container} rounded-md p-3 flex items-center gap-2`}>
				<Image src={alertIcon} alt="alert icon" width={16} height={16} />
				<span className={`text-sm`}>{alertMessage}</span>
			</div>
		</div>
	)
}

export default CompatibilityCard