import Image from 'next/image'
import React from 'react'

const MoviePage = () => {
  return (
    <div className='w-full h-screen'>
      <div className='w-full h-auto'>
        <Image src="/assets/rect_banner.avif"
        width={0}
        height={0}
        className='w-auto'
        />
      </div>
    </div>
  )
}

export default MoviePage
