import React from 'react'
import Dialog from '../wrappers/dialog'

function AboutSection() {
    // dialog title 
    const title = "About me"

    // dialog messge
    const message = ` Hi my name is Mohammed Bennaceur, I am a web developer located in Algeria that just finished his Master degree in Software Engineering.\n
                      Since i discovered HTML in my early days in college, web development become my passion, i love learning new technologies, adopt practical tools and educate my self
                      about new concepts and topics, I'm obsessed with writing clean code, implementing best practises and taking care of performance to create the best possible experience.\n
                      In my free time you can find me in football pitches kicking the ball or doing some Calisthenics Muscle ups and push ups.
                      I want to expand my knowledge further more and build awesome staff if your interested reach out. `
  return (
    
    <div id="about">
      <Dialog  title={title} message={message} key={title} />
    </div>
  )
}

export default AboutSection