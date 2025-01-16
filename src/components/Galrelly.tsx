import React from 'react'
import GarellyElement from '../lib/GarellyElement'

function Galrelly(): React.ReactElement {
    return (
        <div className='
        mt-16 
        sm:mt-20
        '>
            <div className='flex justify-center gap-5 overflow-hidden py-4 sm:gap-8'>
                <GarellyElement image ="./webd.jpg" rotation='-rotate-2' />
                <GarellyElement image ="./dev.jpg" rotation='rotate-2' />
                <GarellyElement image ="./light.jpg" rotation='rotate-0' />
                <GarellyElement image ="./data.jpg" rotation='rotate-2' />
                <GarellyElement image ="./webd.jpg" rotation='rotate-2' />


            </div>
        </div>
    )
}

export default Galrelly