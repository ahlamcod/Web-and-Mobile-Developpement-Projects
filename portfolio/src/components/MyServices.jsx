function MyServices() {
  return (
  <div id="MyServices" className="flex items-center min-h-screen bg-black bg-[radial-gradient(circle_at_center,#540606_0%,#540606_10%,black_60%)]">
        <div className="ml-[200px] relative -top-[60px]  text-white">
         <p className="text-5xl font-bold text-[#C40233] ml-[250px]"> Discover My Services </p>
         <br /> <br /> <br /> <br />
           <div >
            <div className="flex gap-20 items-center">
                <div className="w-80 h-80 bg-black rounded-2xl p-8 shadow-[0_0_30px_10px_rgba(196,2,51,0.8)]"> 
                   <p className="font-bold text-white"> UI UX Design</p> <br />
                   <p className="text-white text-xs">I possess an intermediate level of expertise in UI/UX design, with hands-on experience using Figma and Canva to create intuitive and visually appealing interfaces. My focus is on designing user-centered experiences that balance aesthetics with functionality.</p>
              <br /> <br />
              <a href="https://www.figma.com/@ahlamdesign" className="text-white hover:text-[#C40233] active:text-[#C40233]">Check my Figma Community → </a>  
                </div >
                <div className="w-80 h-80 bg-black rounded-2xl p-8 shadow-[0_0_30px_10px_rgba(196,2,51,0.8)]"> 
                  <p className="font-bold text-white"> Web and Mobile Developpement </p> <br />
                  <p className="text-white text-xs"> I develop both web and mobile applications using React.js, React Native, Node.js, and Tailwind CSS. My work emphasizes building responsive, efficient, and scalable applications that deliver seamless user experiences across platforms.</p>
               <br /> <br />
               <a href="https://github.com/ahlamcod/Web-and-Mobile-Developpement-Projects" className="text-white hover:text-[#C40233] active:text-[#C40233]">Check my Github → </a>
                </div>
                <div className="w-80 h-80 bg-black rounded-2xl p-8 shadow-[0_0_30px_10px_rgba(196,2,51,0.8)]"> 
                  <p className="font-bold text-white"> Machine Learning and Data Science </p> <br />
                  <p className="text-white text-xs"> I have a foundation in data analysis using R and Python, where I apply statistical methods and visualization techniques to extract insights. In addition, I can design and train supervised and unsupervised machine learning algorithms to solve practical problems.</p>
               <br />
               <a href="https://github.com/ahlamcod/MachineLearningAndDataScienceProjects" className="text-white hover:text-[#C40233] active:text-[#C40233]">Check my Github → </a>
                </div>
            </div>
           </div>
        </div>
      </div>
      );
}

export default MyServices;