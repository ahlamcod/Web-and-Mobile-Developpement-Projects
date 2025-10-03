function AboutMePage() {
  return (
  <div id="aboutmePage" className="flex gap-5 items-center min-h-screen bg-black">
        <div className="ml-[200px] -mr-[50px] text-white">
           <p className="text-5xl ml-[50px] -mr-[50px] font-bold text-[#C40233]"> About Me </p>
           <br />
           <p className="text-sm ml-[50px] -mr-[200px]">
              Hi, I am Ahlam Ould Khesal, a computer science student passionate about algorithms, optimization, and creative problem-solving. 
           <br />
              I enjoy working on projects that combine logic with innovation, from data analysis to game development. 
           <br />
              Always curious and eager to learn, I aim to build meaningful solutions that make a real impact.
           </p>
           <br /><br />
           <div className="flex gap-5 ml-10">
              <span className="border-2 border-[#C40233] text-[#C40233] font-bold rounded-2xl w-25 cursor-pointer hover:bg-[#C40233] hover:text-white hover:font-bold active:bg-[#C40233] active:text-white active:font-bold">
                <a href="/cv.pdf" className="ml-[25px] mr-[15px]"> My CV </a>
              </span>
              <span className="border-2 border-[#C40233] text-[#C40233] font-bold rounded-2xl w-30 cursor-pointer hover:bg-[#C40233] hover:text-white hover:font-bold active:bg-[#C40233] active:text-white active:font-bold">
                          <a href="mailto:ahlam.ouldkhesal@gmail.com?subject=Job%20Opportunity&body=Hello%20Ahlam," className="ml-[30px] mr-[15px]" > Hire me </a>
              </span>
           </div>
        </div>
        <div >
             <img src="ahlamdoll_right.png" alt="ahlamdoll" className="w-100 h-auto ml-[200px]"/>
        </div>
  </div>
      );
}

export default AboutMePage;

