import Image from "next/image";

import { AiFillCloseCircle } from "react-icons/ai";
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";

function ProjectModal({ project, handleModal }) {
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

      {/* content container */}
      <div className="flex flex-col md:flex-row-reverse gap-4">
        <div className="mx-auto bg-stone-800 text-white px-8 py-4 rounded md:w-[700px]  md:text-xl">
          <div className="mb-6 flex text-primary gap-4 items-center">
            <p>Links:</p>
            <div className="flex text-white gap-3">
              <a
                href={project.links.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub className="w-5 h-5 hover:text-gray-300 transition-all duration-200 ease-in-out" />
              </a>
              <a
                href={project.links.live}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaExternalLinkSquareAlt className="w-5 h-5 hover:text-gray-300 transition-all duration-200 ease-in-out" />
              </a>
            </div>
          </div>
          <div>
            <span className="text-primary ">Description</span> :{" "}
            {project.attributes.title}
          </div>

          <div className="mt-6">
            <p>
              <span className="text-primary">Technologies</span> :{" "}
              {project.attributes.tools}
            </p>
          </div>
        </div>

        <div className="md:w-[700px] h-[50vh] relative">
          <Image
            src={project.attributes.pictures}
            objectFit="contain"
            layout="fill"
            alt="project picture"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
