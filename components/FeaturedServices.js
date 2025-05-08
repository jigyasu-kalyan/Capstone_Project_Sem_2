import React from 'react'

function FeaturedServices() {
  return (
    <div className='ml-12 mt-15'>
        <div className='text-2xl'>Featured Services</div>
        <div className='flex flex-row'>
            <div className='flex flex-col bg-white'>
                <div className='flex flex-row'>
                    <img src='/assets/meditation_icon.webp' alt='Meditation' className='w-16 h-16 object-contain' />
                    <div className='flex flex-col'>
                        <p>Meditation</p>
                        <p>Guided meditations for mindfulness</p>
                    </div>
                </div>
                <button type='submit' className=''>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default FeaturedServices