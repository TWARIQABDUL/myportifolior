import React from 'react'
import { Link } from 'react-router-dom'
import SvgPic from '../lib/SvgPic'
function ProjjectContainer(): React.ReactElement {
  return (
    <div className='
    p-4
    sm:px-8
    lg:px-12
    hover:bg-gray-900
    -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 
     transition group-hover:scale-100 group-hover:opacity-100 
    sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50
    '>
      <div className='
      
      relative 
      z-10 
      flex 
      h-12 
      w-12 items-center 
      justify-center rounded-full 
      bg-white shadow-md shadow-zinc-800/5 ring-1
       ring-zinc-900/5 dark:border dark:border-zinc-700/50 
       dark:bg-zinc-800 dark:ring-0
      '>
        <img src="/deone.png" alt=""
          loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="h-8 w-8"
          style={{ color: 'transparent' }}
        />
      </div>
      <h2 className='
      mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100
      '
      >
        <div className="d">
          <Link to='/'> Deone</Link>
          <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
            Creating technology to empower civilians to explore space on their own terms.
            <Link to="https://moviestream.thousandsofts.com/"><SvgPic /> Deone Movie</Link>

          </p>

        </div>
      </h2>
    </div>
  )
}

export default ProjjectContainer