import React from 'react'
import NavContainer from '../components/NavContainer'
import ProjjectContainer from '../components/ProjjectContainer'

function Projects():React.ReactElement {
  return (
    <div className='
     bg-gray-950 
     z-10 
     relative
    '>
        <NavContainer/>
        <div className="flex-auto">
            <div className="sm:px-8 mt-16 sm:mt-32">
                <div className="max-w-2xl relative px-4 sm:px-8 lg:px-12">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">Things I’ve made trying to put my clients in the universe.</h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">I’ve worked on tons of little projects over the years but these are the ones
                         that I’m most proud of. Many of them are open-source, so if you see something that piques your interest,
                          check out the code and
                         contribute if you have ideas for how it can be improved.</p>
                </div>
                <div className="sm:px-8 mt-16 sm:mt-32 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                    <ProjjectContainer/>
                    <ProjjectContainer/>
                    <ProjjectContainer/>
                    <ProjjectContainer/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects