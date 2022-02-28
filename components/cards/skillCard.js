import { motion } from "framer-motion"
import { FaReact } from "react-icons/fa"
function SkillCard({ variant ,title ,iconn: Iconn }) {
    const letter  = {
        hidden : { opacity : 0, y : 50},
        visible : {
            opacity: 1,
            y:0,
        }
    }

  return (
    <motion.div 
    className="skill-card w-32 h-32 flex flex-col items-center gap-2 group"
    variants={variant}
    >
    {/* <span className="text-primary  w-32 h-32"><Icon/></span> */}
    <Iconn className="text-primary  w-32 h-32 group-hover:animate-bounce"/>
    <span className="text-white text-lg">{title}</span>
    </motion.div>
  )
}

export default SkillCard