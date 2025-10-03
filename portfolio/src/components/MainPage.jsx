import { FaGithub, FaLinkedin } from "react-icons/fa"; //import SM icons from react icon library
import { MdEmail } from "react-icons/md";
import AboutMePage from './AboutMePage';
import ContactPage from './ContactPage';

function MainPage() {
  return (
    <>
      <div id="homePage" className="flex gap-5 items-center h-auto min-h-screen bg-black bg-[radial-gradient(circle_at_center,#540606_0%,#540606_5%,black_40%)]">
            <div>
             <div className="flex gap-10 text-7xl font-bold text-[#C40233] ml-[90px] [text-shadow:0_0_10px_#C40233,0_0_20px_#C40233,0_0_40px_#C40233]">
                 <span className="animate-bounce"> &lt;</span>
                 <span className="animate-bounce">/</span>
                 <span className="animate-bounce">&gt;</span>
               </div>
               <br />
               <div className="flex gap-10 text-7xl font-bold text-[#C40233] ml-[150px] [text-shadow:0_0_10px_#C40233,0_0_20px_#C40233,0_0_40px_#C40233]">
                 <span className="animate-bounce">{`{`}</span>
                 <span className="animate-bounce">{`}`}</span>
                 <span className="animate-bounce">;</span>
               </div>
             </div>
               <div className="-ml-[300px] -mt-20">
                 <div className="pt-25">
                     <img src="/ahlamdoll.png" alt="ahlam's image" className="w-60 h-auto ml-[620px] "/>
                 </div>
                 <br />
                 <div>
	                <p className="text-5xl font-bold text-[#C40233] ml-[400px] animate-bounce"> Welcome to Ahlam's Portfolio </p>
	                <p className="text-1xl ml-[450px]">A space where technology meets creativity. Discover my projects, skills, and journey.</p>
                </div>
                <br />
	              <div className="flex gap-6 text-3xl text-[#C40233] items-center ml-[650px] ">
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
            <div>
             <div className="flex gap-10 text-7xl font-bold text-[#C40233] ml-[90px] [text-shadow:0_0_10px_#C40233,0_0_20px_#C40233,0_0_40px_#C40233]">
                 <span className="animate-bounce">&lt;</span>
                 <span className="animate-bounce">/</span>
                 <span className="animate-bounce">&gt;</span>
               </div>
               <br />
               <div className="flex gap-10 text-7xl font-bold text-[#C40233] ml-[30px] [text-shadow:0_0_10px_#C40233,0_0_20px_#C40233,0_0_40px_#C40233]">
                 <span className="animate-bounce">{`{`}</span>
                 <span className="animate-bounce">{`}`}</span>
                 <span className="animate-bounce">;</span>
               </div>
             </div>
      </div>
      <AboutMePage />
      <ContactPage />
      </>
  );
}

export default MainPage;