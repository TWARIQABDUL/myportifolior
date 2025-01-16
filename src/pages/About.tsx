import React from 'react';
import NavContainer from '../components/NavContainer';
import Skills from '../components/Skills';
import Education from '../components/Education';
import { Mail } from '../lib/AllowUp';

const About: React.FC = () => {
  return (
    <div className="bg-gray-950 h-full z-10 relative">
      <NavContainer />
      <div className="flex-auto">
        <div className="sm:px-8 mt-18 sm:mt-16 px-4 lg:px-12">
          <div className="max-w-2xl relative px-4 sm:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Who I am
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              I am an Expert Software Developer proficient in web and mobile development
            </p>
          </div>
          <div className="sm:px-8 mt-18 sm:mt-16 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            <Education />
            <Skills />
            <div className='space-y-10 lg:pl-16 xl:pl-24'>
              <form action="" className='rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40'>
              <h2 className='flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
                <Mail/><span className='ml-3'>Contact me</span>
              </h2>
              {/* <p className='mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
              Get notified when I publish something new, and unsubscribe at any time.
              </p> */}
              <div className='mt-6 flex flex-col gap-4'>
              <input placeholder="Email address" aria-label="Email address"
               required className="min-w-0 flex-auto appearance-none rounded-md border
                border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md
                 shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none
                  focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15]
               dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400
                dark:focus:ring-teal-400/10" type="email"/>
                <textarea className='
                placeholder="Email address" aria-label="Email address"
               required className="min-w-0 flex-auto appearance-none rounded-md border
                border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md
                 shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none
                  focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15]
               dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400
                dark:focus:ring-teal-400/10"
                '>
                </textarea>
                <button className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2
                 transition active:transition-none bg-blue-800 font-semibold text-zinc-100 hover:bg-zinc-700
                  active:bg-blue-800 active:text-zinc-100/70 dark:bg-blue-800
                 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-4 flex-none"
                  type="submit">Join</button>
              </div>
              </form>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default About;
