import Dialog from '../wrappers/dialog'
import { useRef } from 'react';
import { sendForm } from 'emailjs-com';
import { useForm } from "react-hook-form";
import { useAlert } from "react-alert";
function ContactSection() {
    const formRef = useRef()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // init alert component 
    const alert = useAlert();

    //  dialog title
    const title = "Contact me"

    // dialog message
    const message = "Wanna make something awesome ? \n you know what to do."

    // send mail
    const onSubmit = (e) => {
    e.preventDefault();

    // show loading message 
    alert.info("Processing ...")
    sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_USER_ID
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert.success("Your message has been sent successfully!")
        formRef.current.reset()
        
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert.error(err)
      });
  };  

  return (
    <>
      <Dialog id="contact" title={title} message={message}/>
      <div className='mx-auto sm:ml-8 w-[20rem] lg:w-[26rem] mb-32'>
      <form onSubmit={e=>handleSubmit(onSubmit(e))} ref={formRef}>
          <input type="text" name="user_name" placeholder='Name' className={`bg-gr  h-10 p-2  outline-0 w-full focus:border-b-2  ${errors.user_name ? "focus:border-red-600": "focus:border-primary"}`} {...register("user_name",{required: true})} />

          <input type="email" name="from_name" placeholder='Email' className={`bg-gr block h-10 p-2 outline-0 mt-4 w-full focus:border-b-2 ${errors.user_email ? "focus:border-red-600": "focus:border-primary"}`} {...register("user_email",{required: true})}  />

          <input type="text" name="subject" placeholder='Subject' className="block bg-gr w-full  h-10 p-2  outline-0 mt-4 focus:border-b-2 focus:border-primary" {...register("subject")}  />

          <textarea name="message" placeholder='Message'  className={`block bg-gr w-full h-48 p-2  outline-0 mt-4 focus:border-b-2 ${errors.message ? "focus:border-red-600": "focus:border-primary"}`} {...register("message",{required: true})}  ></textarea>
          <button type="submit"  className='btn float-right'>Send Message</button>
      </form>
      </div>
    </>
  )
}

export default ContactSection