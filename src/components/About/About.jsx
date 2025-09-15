import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile.png";

function About() {
  const resumeLink = "";
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[14vw] font-sans mt-14 md:mt-14 lg:mt-16"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* left side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Sourabh Menaria
          </h2>
          {/* skills heading with typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <Typewriter
              words={[
                "Fullstack Developer",
                "Mern Developer",
                "Frontend Developer",
                "Coder",
              ]}
              loop={true}
              cursor
              cursorStyle={<span className="text-[#8245ec]">|</span>}
              typeSpeed={120}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h3>
          {/* about me para */}
          <p className="text-base sm:text-lg md:text-[1rem] text-gray-400 mb-10 mt-8 leading-relaxed">
            I'm a full-stack web developer with hands-on experience from a
            6-month internship and personal projects. Skilled in the MERN stack
            and tools like Tailwind CSS, I enjoy building scalable applications
            with clean code and seamless user experiences. Passionate about
            learning and problem-solving, I focus on both front-end and back-end
            development to deliver complete solutions.
          </p>
          {/* resume button */}
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #6d07f2, #9832fa)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 30px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 md:w-[30rem] md:h-[30rem]  border-3 border-purple-600 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Sourabh Menaria"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
}

export default About;
