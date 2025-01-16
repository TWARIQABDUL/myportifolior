import React from 'react'

interface GarellyElementProps {
  image: string;
  rotation: String;
}

function GarellyElement({ image, rotation }: GarellyElementProps): React.ReactElement {  return (
    <div className={`
            relative 
            aspect-[9/10] 
            w-44 flex-none 
            overflow-hidden 
            rounded-xl 
            bg-zinc-100 
            sm:w-72 
            sm:rounded-2xl 
            dark:bg-zinc-800 
            
            ${rotation}
            `}
            >
            <img src={image} className='object-cover h-full' alt="" />

            </div>
  )
}

export default GarellyElement