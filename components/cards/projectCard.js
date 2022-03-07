import Image from 'next/image'
import React, { useState } from 'react'
import ProjectModal from '../modals/projectModal'

function ProjectCard({ project }) {
    const [showHideModal, setShowHideModal] = useState(false)
    
    // card image
    const image = `${project.attributes.logo.data.attributes.url}`
  return (
      <>
        <div className='group overflow-hidden  relative'>
            <Image src={image} layout='responsive' width={288} height={288} objectFit='contain' className='w-full group-hover:scale-110 transition duration-300 brightness-50 group-hover:brightness-100'/>
            <button onClick={()=>{setShowHideModal(true)}}
                className='bg-primary scale-0 group-hover:scale-100 
                transition ease-out duration-150 rounded-full  h-28 w-28 absolute
                left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2'>
                View Project
            </button>
        </div>
        {showHideModal && <ProjectModal project={project} handleModal={setShowHideModal}/>}
    </>
  )
}

export default ProjectCard