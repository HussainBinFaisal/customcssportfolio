import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import Image from 'next/image';
import 'animate.css';




export default function About() {
    return (
      <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 min-h-screen text-white">
        <div className="max-w-6xl mx-auto py-16 px-8">
          {/* Title wala */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-white mb-4 animate__animated animate__fadeIn animate__delay-1s">
              About Me
            </h1>
            <p className="text-lg text-gray-300 animate__animated animate__fadeIn animate__delay-2s">
              Lets dive into who I am!
            </p>
          </div>
  
          {/* Contentss */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* TexSection */}
            <div className="lg:w-2/3 space-y-6">
              <p className="text-lg leading-relaxed mb-6 animate__animated animate__fadeIn animate__delay-2s">
                Assalamualikum, I am Hussain Bin Faisal, a passionate web developer with a strong enthusiasm for technology and coding. Coming from a humble background, Ive honed my skills in web development, focusing on modern technologies like Next.js, TypeScript, Python, HTML, and CSS.
              </p>
              <p className="text-lg leading-relaxed mb-6 animate__animated animate__fadeIn animate__delay-3s">
                I specialize in building dynamic, responsive websites and applications. My goal is to create beautiful, functional digital experiences that enhance user satisfaction.
              </p>
              <p className="text-lg leading-relaxed mb-6 animate__animated animate__fadeIn animate__delay-4s">
                I believe technology can create a positive impact, and I am committed to continuous learning to stay at the forefront of this ever-evolving field.
              </p>
            </div>
  
       
            <div className="lg:w-1/3 flex justify-center items-center space-y-6">
         
              <div className="p-6 bg-white text-center rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Technologies I Love</h3>
                <div className="flex justify-center space-x-6">
                  <div className="p-4 bg-gray-800 rounded-full transform hover:scale-110 transition duration-300 ease-in-out">
                    <i className="fab fa-html5 text-red-600 text-4xl"></i>
                  </div>
                  <div className="p-4 bg-gray-800 rounded-full transform hover:scale-110 transition duration-300 ease-in-out">
                    <i className="fab fa-css3-alt text-blue-600 text-4xl"></i>
                  </div>
                  <div className="p-4 bg-gray-800 rounded-full transform hover:scale-110 transition duration-300 ease-in-out">
                    <i className="fab fa-js-square text-yellow-500 text-4xl"></i>
                  </div>
                  <div className="p-4 bg-gray-800 rounded-full transform hover:scale-110 transition duration-300 ease-in-out">
                    <i className="fab fa-react text-cyan-400 text-4xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Skills Section This took me 9 till 15 hours    */}
          <div className="mt-12 text-center">
            <h2 className="text-4xl font-semibold mb-6 text-white">My Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform hover:scale-110 transition duration-300 ease-in-out">
              <FaHtml5 className="text-4xl text-orange-600 " />
                <h3 className="text-xl font-bold text-white">HTML</h3>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform hover:scale-110 transition duration-300 ease-in-out">
              <FaCss3Alt className="text-4xl text-blue-500 " />
                <h3 className="text-xl font-bold text-white">CSS</h3>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform hover:scale-110 transition duration-300 ease-in-out">
                
              <FaJsSquare className="text-4xl text-yellow-500 " />
                <h3 className="text-xl font-bold text-white">JavaScript</h3>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform hover:scale-110 transition duration-300 ease-in-out">
               
               
              <FaReact className="text-4xl text-blue-400 " />
                <h3 className="text-xl font-bold text-white">Next.js</h3>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform hover:scale-110 transition duration-300 ease-in-out">
               
              <SiTypescript className="text-4xl text-blue-600 " />
                <h3 className="text-xl font-bold text-white">TypeScript</h3>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform hover:scale-110 transition duration-300 ease-in-out">
                
              <FaPython className="text-4xl text-yellow-400 " />
                <h3 className="text-xl font-bold text-white">Python</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  