import Image from 'next/image';
import profilePic from './/public/profile.jpg';

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white min-h-screen flex flex-col items-center justify-center text-center p-10">
      <h1 className="text-5xl font-extrabold mb-4">Hello, I am Hussain</h1>
      <p className="text-xl mb-6">Web Developer | Tech Genious| Always learning</p>
      <div className="flex items-center justify-center mb-10">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white">
          <Image src={profilePic} alt="Hussain's profile picture" width={500} height={500} />
        </div>
      </div>
      <p className="text-lg mb-6 max-w-xl mx-auto">
        I am passionate about coding and technology. I specialize in Frontend and Backend development, with expertise in HTML, CSS, JavaScript, TypeScript, and Python.
      </p>
      <a href="about" className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-bold py-3 px-6 rounded-full text-lg">
        Learn More About Me
      </a>
    </div>
  );
}
