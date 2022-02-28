import { motion } from "framer-motion"

function Dialog({ title , message}) {

    const sentence = {
        hidden : { opacity : 1 },
        visible : {
            opacity : 1,
            transition : {
                delay : 0.5,
                staggerChildren : 0.1
            }
        }
    }

    const letter  = {
        hidden : { opacity : 0, y : 50},
        visible : {
            opacity: 1,
            y:0,
        }
    }
  return (
   <>
        <motion.h2 className='text-zone text-primary text-4xl lg:text-6xl ml-8 lg:ml-16 mt-32'
                    initial="hidden"
                    variants={sentence}
                    whileInView="visible"
                    viewport={{ once: true }}
                    >
            {title?.split("").map((char, index)=>{
                if(char === " ") return (" ")
                return (
                    <motion.span key={char + "_" + index} variants={letter} className="blast">
                        {char}
                    </motion.span>
                )
            })}
        </motion.h2>

        <p className="relative text-gray-300 text-gl lg:text-xl ml-8 lg:ml-16 lg:w-[550px]  my-16 ">
             {message.split("\n").map((line,index) =>{
            return ( 
              
                <span key={index}> 
               {line}<br/>
               </span> 
              
            )
             })}
        </p>
      
   </>
  )
}

export default Dialog