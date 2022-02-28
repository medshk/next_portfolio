import ProjectCard from "../cards/projectCard"
import react from '../../public/images/react.jpg'
import logo from '../../public/logo.jpg'
import Dialog from "../wrappers/dialog"

function WorkSection() {
    // dialog title
    const title = "My Projects"
    
    // dialog message 
    const message = `This is a small set of Projects i've recently done`

  return (
    <>
        <Dialog title={title} message={message} key={title} />
        <section className="relative my-32" >

            <div className="card-container grid grid-cols-2 gap-0 sm:grid-cols-3     md:grid-cols-4 lg:grid-cols-5">
                <ProjectCard image={react}/>
                <ProjectCard image={logo}/>
                <ProjectCard image={react}/>
                <ProjectCard image={logo}/>
                <ProjectCard image={react}/>
            </div>

        </section>
    </>
  )
}

export default WorkSection