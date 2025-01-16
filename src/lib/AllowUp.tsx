import React from 'react'
export const ArrowUp = (): React.ReactElement => {
    return (
        <svg className='fill-slate-500 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 
            192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 
            256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 
            0l192 192z"/>
        </svg>
    );
};
export const ArrowDown = (): React.ReactElement => {
    return (
        <svg className='fill-slate-100 h-5 w-10 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 
         0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
    );
};
export const Mail = (): React.ReactElement => {
    return(
        <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round"
         stroke-linejoin="round" aria-hidden="true" className="h-6 w-6 flex-none">
            <path d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
             className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500">
                </path><path d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6" className="stroke-zinc-400
                 dark:stroke-zinc-500"></path></svg>
    )
}