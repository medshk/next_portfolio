import React, { useEffect, useRef } from 'react'

function Burger({ setToggleMenuBar }) {
    const ref = useRef()
    useEffect(()=>{
        ref.current.addEventListener("click",()=>{
            console.log("working now")
            setToggleMenuBar(prev =>!prev)
            ref.current.classList.toggle("change")
        })
       
    },[])

  return (
    <div ref={ref}
        className='fixed lg:hidden bg-[#181818] z-10
        w-12 h-12 flex flex-col items-center justify-center 
        px-2 py-1 rounded gap-2 top-4 right-4'>
        <span className='bar1 bg-white h-1 w-8'></span>
        <span className='bar2 bg-white h-1 w-8'></span>
        <span className='bar3 bg-white h-1 w-8'></span>
    </div>
  )
}

export default Burger