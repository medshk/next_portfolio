import Dialog from "../wrappers/dialog"
import SkillCard from "../cards/skillCard"
import { motion } from "framer-motion"
import skillsIcons from "../icons/skillsIcons"

function SkillsSection() {
    // dialog title
    const title = "My Skills"

    // dialog message 
    const message = "An extanded set of skills "


    const cardGrid = {
        hidden : { opacity : 1 },
        visible : {
            opacity : 1,
            transition : {
                delay : 1,
                staggerChildren : 0.3
            }
        }
    }

    const card  = {
        hidden : { opacity : 0, y : 50},
        visible : {
            opacity: 1,
            y:0,
        }
    }

   
  return ( 
      <>
        <Dialog title={title} message={message} key={title} id="skills"/>
        <section className="relative my-24 ">
        <motion.div 
              initial="hidden"
              variants={cardGrid}
              whileInView="visible"
              viewport={{ once: true }}
              className="skills-grid px-16 py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-32">
         {skillsIcons.map(({title, iconn},index)=>(
            <SkillCard 
                key={index} 
                variant={card}
                title={title}
                iconn={iconn} 
            />
         ))}
        
        </motion.div>

        </section>
      </>

  )
}

export default SkillsSection