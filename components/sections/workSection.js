import ProjectCard from "../cards/projectCard";
import react from "../../public/images/react.jpg";
import logo from "../../public/logo.jpg";
import Dialog from "../wrappers/dialog";

function WorkSection({ projects }) {
  console.log("picture", projects);
  // dialog title
  const title = "My Projects";

  // dialog message
  const message = `This is Projects i've recently done`;

  return (
    <div id="work">
      <Dialog title={title} message={message} key={title} />
      <section className="relative my-32">
        <div className="card-container px-4  grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {projects?.map((project, index) => {
            return <ProjectCard key={index} project={project} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default WorkSection;
