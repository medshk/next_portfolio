import Image from "next/image"

import { AiFillCloseCircle } from "react-icons/ai"
import pp from "../../public/images/project1.jpg"
// import Swiper core and required modules
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



function ProjectModal({ project , handleModal }) {

  const getUrl = (image) => {

    return `${image.attributes.url}`
  }
  const handleClose = () =>{
    handleModal(false)
  }
    
  return (
    <div
      className="fixed top-0 right-0 bottom-0 left-0 
      grid place-items-center bg-[rgba(0,0,0.2,0.8)] z-30">
        <button onClick={handleClose} className="fixed right-4 sm:right-10  top-10 text-primary"><AiFillCloseCircle className="w-10 h-10"/></button>
        <div className="mx-auto bg-stone-800 text-white px-8 py-4 rounded">
          <p className="text-primary">Description  :</p>
        <p>{project.attributes.title}</p>
      </div>
      <Swiper
        
          navigation={true} 
          modules={[Pagination, Navigation]}
          className="w-full h-[30vh] sm:w-[69vw] sm:h-[70vh]"
      >
        {project.attributes.pictures.data.map((image) => {
          return (
            <SwiperSlide className="w-full" key={image.id}> <Image src={getUrl(image)} objectFit='contain' width="100%" height="100%" layout="fill"/></SwiperSlide>
          )
        })}
            
          
      </Swiper>
      <div className="mx-auto bg-stone-800 text-white px-8 py-4 rounded">
        <p><span className="text-primary">Technologies</span> : {project.attributes.tools}</p>
      </div>
    </div>
  )
}

export default ProjectModal