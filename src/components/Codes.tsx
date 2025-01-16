import React from 'react'

function Codes():React.ReactElement {
  return (
    <>
        <span className="s">import { <span className="text-red-300">{"{useState}"}</span>}  from 'react'</span><br />
        import { <span className="text-red-300">Switch</span>} from '@headlessui/react' <br /> <br />

        function <span className='text-red-300'>Example() {"{"}</span><br />
        const [<span className="text-red-300">enabled, setEnabled</span>] = <span className="text-red-300">useState(true)</span>
        <br />
        return(<br />
        {`<form action="/notification-settings" method="post">`} <br /><br />
            <span className='text-blue-400'>{"</Switch>"}</span> <br />
            <span className='p-4'>checked = {"{"}<span className=' text-red-300'>{" enabled"}</span>{" }"}</span><br />
            <span className='p-4'>onChange = {"{"} <span className=' text-red-300'>{"setEnabled"}</span>{ "}"}</span><br />
            <span className='p-4'>name = {"{"} <span className=' text-red-300'>{"notifications"}</span>{" }"}</span><br />
            {">"} <br />
            <span className='text-blue-400'>{"</Switch>"}</span> <br />

                <span className="p-4">{"<button>Submit</button>"}</span> <br />
                {"</form>"}
        )
    </>
  )
}

export default Codes