import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { github } from "../assets";

const ServiceCard = ({ index, title, icon }) => {
  const nodeRef = React.useRef(null);
  return (
    <Tilt nodeRef={nodeRef} className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-20 h-20 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Experienced software engineer skilled in web development, with a
          strong background in creating user-friendly websites and applications.
          Proficient in JavaScript, HTML, SCSS, and popular frameworks such as
          React and Laravel. Adept at leveraging modern technologies to deliver
          exceptional user experiences.
          <br />
          <br />
          Additionally, my background in photography and graphic design allows
          me to bring a unique perspective to my work, creating visually
          appealing designs that enhance the overall user experience.
        </motion.p>

        <div className="mt-5 max-w-3xl">
          <div className="grid grid-cols-5 gap-4">
            <a
              download
              href="../../public/KavinduTheekshana.pdf"
              type="button"
              className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2 col-span-2"
            >
              <img
                className="w-7 mr-2"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACJElEQVR4nO2ZSy/EUBiG+z9cFsJsESJhSQ8Sia20xG1OIiLERiISv8CtlhJC0hGX6rFibIyf0B2TuIcmgiYIC6tPTmkcZjCj7UzLeZM3k+l0znmf831fNxUEHzSr6oVKjGhKTH+wreq6srxRJoRBszS8SiwlRuCDVWJNLa0XCEGXYp88gRmVbFGYVyB9274W09eEoEux24YADe5cm1zZLHqrwl1eQjW340JRimqihB+QjMFxSpswHpuea3H+PzIz1/rdvYhZ095Dwroo9ZV5F17GFrtJJgATi6vPNDj1xOL6c6YAyAGRsVXf2ed+ZujJp9vgJ4BsjL5YH8lR9zPDtk3y+BRYeQXA6uDwhAVwPzPsiXzWPIm7Dr9A4inrsnv6CnBqXtkB3IQ/M6/yB+CXEAdgxCvwCyHeQtm20KMJkOgC0MoBEt0AT2bIKpDoAliJvHuvJ2QAWsVHAK0y7W1G8iitA1CB7owqEFyAR/M1NK3EXm8IZ8BjoVwCXFyfwfjSMDSNVkPNQIn9Sb9f3pwHH2DXiEPtYClU9RenmF5PGDvBnoG6oUja8I7p74EGqPomvOPfCPEh/k9PIT+EOECGFfjqqZKt81aB0AP4JcQB/ksFjLDPgBF2AL+EOAAjXoF8t5Ao4XtnseTRCfit/cNjj19wSFhnTySXFqWo5hqgoQ1HkIRvcx5exlZjR7RU8EL0bSF94ca2k3+nju/pyXsWnovrj+sFF3906tkfHZoAAAAASUVORK5CYII="
              ></img>
              Download Curriculum vitae
            </a>

            <a
              href="https://github.com/KavinduTheekshana"
              target="_blank"
              type="button"
              className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2 col-span-1"
            >
              <img
                className="w-7 mr-2"
                src={github}
              ></img>
              Github
            </a>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
