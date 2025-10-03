import { useRef } from "react";
import emailjs from "emailjs-com"; {/* EmailJS is a service that connects your form to my real email address */}
import { FaGithub, FaLinkedin } from "react-icons/fa"; //import SM icons from react icon library
import { MdEmail } from "react-icons/md";

function ContactPage() {

    {/* Calling THe emailjs service*/}
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            "service_5e161te", //My service ID 
            "template_1e01lwq", //My template ID 
            form.current,
            "ERI23ZUNwlo6qCtu_" , //My public key
        ).then(
            (result) => {
                console.log("Success:", result.text);
                alert("Message sent!");
            },
            (error) => {
                console.log("Error:", error.text);
                alert("Failed to send.");
            }
        );
    };
    {/* Contact form inside a card */}

  return ( 
  <div id="contact" className="flex items-center min-h-screen bg-gradient-to-t from-[#540606] to-black">
        <div className="bg-black bg-opacity-90 rounded-2xl shadow-lg p-8 w-full max-w-md mx-30 ">
          <div className="inline-block">
               <p className="font-bold text-3xl">Contact us</p>
               <hr />
          </div>

         <br /><br />
        <div >
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4"> 
            <fieldset>
              <label htmlFor="name" className="text-white font-medium "> Full Name: </label> 
              <input type="text" name="name" placeholder="Your Name" className="ml-5" required />
              <br /><br />
              <label htmlFor="email" className="text-white font-medium " > Email: </label>
              <input type="email" name="email" placeholder="Your Email" className="ml-5" required /> 
              <br /><br />
              <label htmlFor="message" className="text-white font-medium " > Message: </label>
              <br />
              <textarea name="message" placeholder="Your Message" required />
              <br /><br />
              <div className="bg-[#C40233] text-white font-bold rounded-2xl w-20">
                <button type="submit" className="ml-[20px]">Send</button>
              </div>
      
            </fieldset>
          </form>
        </div>
        <br /><br />
        </div>
        <div className="font-medium text-white mt-[-40px] pl-5">
            <p className="font-bold text-3xl"> Site Map </p>
            <hr />
            <br /><br />
            <p>Home</p>
            <br />
            <p>About me</p>
             <br />
            <p>Contact</p>
             <br />
            <p>My Projects</p>
        </div>
        <div className="mr-[-20px] mt-[-60px]">
            <img src="/logo.png" alt="logo" className="w-70 ml-90" />
            <p className="text-[#C40233] text-[20px] font-bold ml-105">Ahlam's Portfolio</p>
            <p className="text-0.25xl text-white ml-98"> ahlam.ouldkhesal@gmail.com</p>
            <br />
            <div className="flex gap-6 text-3xl text-white items-center ml-[430px] ">
                           {/* GitHub */}
                           <a href="https://github.com/ahlamcod" target="_blank" rel="noopener noreferrer">
                              <FaGithub />
                           </a>
                           {/* LinkedIn */}
                           <a href="https://www.linkedin.com/in/ahlam-ould-khesal-6666512a4" target="_blank" rel="noopener noreferrer">
                             <FaLinkedin />
                           </a>
                           {/* Email */}
                            <a href="mailto:ahlam.ouldkhesal@gmail.com">
                             <MdEmail />
                           </a>
                       </div>
        </div>
      </div>
);
}

export default ContactPage;
