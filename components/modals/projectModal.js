import Image from "next/image"
import { useEffect, useRef } from "react"

function ProjectModal({ image }) {
  const ref = useRef()
  useEffect(() =>{
    window.onclick = (e)=>{
      if (e.target == ref.current) {
        ref.current.style.display = "none";
      }
    }
  },[])
  return (
    <div ref={ref}
      className="fixed top-0 right-0 bottom-0 left-0 
      grid place-items-center bg-[rgba(0,0,0.2,0.8)] z-30">
      <Image src={image} objectFit='cover' width={300} height={300}/>
    </div>
  )
}

export default ProjectModal