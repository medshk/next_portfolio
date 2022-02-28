import React, { useRef , useEffect } from 'react'
import { Canvas } from '../canvas/canvas'
import { IoIosArrowDropdown } from "react-icons/io"
import { motion } from "framer-motion"

function HomeSection() {
  const line1 = "Hola,",
        line2 = "I'm Med,",
        line3 = "web developer"

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

    useEffect(()=>{
        const blasts = document.querySelectorAll(".blast")
        blasts.forEach(item =>{
        item.addEventListener("mouseover",()=>{
            item.classList.add("animated","rubberBand")
        })
        item.addEventListener("animationend",()=>{
            item.classList.remove("rubberBand")
        })
        })

    },[])


  return (
    <div className='w-full h-screen relative '>
        <Canvas/>
        <span className=' absolute text-gr font-pm italic top-2 block lg:left-8'>{'</html>'}</span>
        <span className=' absolute text-gr font-pm italic top-12 left-6 block lg:left-12'>{'<body>'}</span>
        <div className="pt-44  ml-8 lg:ml-20   lg:pt-28 ">
            <motion.h1 className='text-zone text-white text-6xl lg:text-8xl'
                        variants={sentence}
                        initial="hidden"
                        animate="visible">
                {line1.split("").map((char, index)=>{
                    return (
                        <motion.span key={char + "-" + index} variants={letter} className="blast">
                            {char}
                        </motion.span>
                    )
                })}
                 <br/>
                 {line2.split("").map((char, index)=>{
                    if(char === " ") return (" ")
                    return (
                        <motion.span key={char + "-" + index} variants={letter} className={`blast ${char === "M" ? "text-secondary" : ""}`}>
                            {char}
                        </motion.span>
                    )
                })}
                 <br/>
                 {line3 .split("").map((char, index)=>{
                    if(char === " ") return (" ")
                    return (
                        <motion.span key={char + "-" + index} variants={letter} className="blast">
                            {char}
                        </motion.span>
                    )
                })}
            </motion.h1>
            <p className='domain-text-zone '>
                Full Stack Developer / Software Engineer 
            </p>
            <button className='btn'>
                Contact me
            </button>
        </div>
        <IoIosArrowDropdown className='absolute bottom-4 left-[45%] text-primary w-12 h-12 animate-bounce'/>
    </div>
  )
}

export default HomeSection