import Image from "next/image";

import { AiFillCloseCircle } from "react-icons/ai";
import pp from "../../public/images/project1.jpg";
// import Swiper core and required modules
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaGithub, FaLink } from "react-icons/fa";
import Link from "next/link";

function ProjectModal({ project, handleModal }) {
  const getUrl = (image) => {
    return `${image.attributes.url}`;
  };
  const handleClose = () => {
    handleModal(false);
  };

  return (
    <div
      className="fixed top-0 right-0 bottom-0 left-0 
      grid place-items-center bg-[rgba(0,0,0.2,0.8)] z-30"
    >
      <button
        onClick={handleClose}
        className="fixed right-4 sm:right-10  top-10 text-primary"
      >
        <AiFillCloseCircle className="w-10 h-10" />
      </button>
      <div className="mx-auto bg-stone-800 text-white px-8 py-4 rounded md:w-[800px]">
        <p>
          <span className="text-primary">Description</span> :{" "}
          {project.attributes.title}
        </p>

        <div className="mt-6">
          <p>
            <span className="text-primary">Technologies</span> :{" "}
            {project.attributes.tools}
          </p>
        </div>
        <div className="mt-6">
          <p className="flex items-baseline gap-4">
            <span className="text-primary flex gap-1 ">
              <FaLink />
              {":"}
            </span>
            <a
              href={project.links.live}
              rel="noopener noreferrer"
              target="_blank"
            >
              Live preview
            </a>
          </p>
          <p className="flex items-baseline gap-4">
            <span className="text-primary flex gap-1">
              <FaGithub /> {":"}
            </span>
            <a
              href={project.links.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              Github repo
            </a>
          </p>
        </div>
      </div>

      <Swiper
        navigation={true}
        modules={[Pagination, Navigation]}
        className="w-full h-[30vh] sm:w-[69vw] sm:h-[70vh]"
      >
        <Image
          src={project.attributes.pictures}
          objectFit="contain"
          width="100%"
          height="100%"
          layout="fill"
          alt="project picture"
        />
      </Swiper>
    </div>
  );
}

export default ProjectModal;
