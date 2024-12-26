import { motion } from "framer-motion";
import aboutImg from '../assets/rizPresent.jpeg';


const About = ({ isCustomBackground }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className={`border-b ${isCustomBackground ? 'border-babyBlue' : 'border-neutral-900'} pb-4`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      variants={containerVariants}
    >
      <motion.h2
        className={`${isCustomBackground ? 'text-amber-800' : 'text-white'} my-20 text-center text-4xl font-bold`}
        variants={itemVariants}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div
          className="w-full lg:w-1/2 lg:p-8"
          variants={itemVariants}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-center">
            <motion.img
              className="rounded-2xl"
              src={aboutImg}
              alt="about"
              variants={imageVariants}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2"
          variants={itemVariants}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex justify-center lg:justify-start">
            <motion.h2
              className={`${isCustomBackground ? 'text-gray-700' : 'text-neutral-300'} my-2 max-w-xl py-6 sm:text-xl font-medium text-justify`}
              variants={itemVariants}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              As a computer science student at Multimedia Nusantara University with a GPA of 3.44, 
              I am dedicated to continuous learning and innovation in software development. I enjoy tackling 
              real-world problems through technology, as demonstrated by my projects such as BearHabit, a mobile 
              habit-tracking app, and OriMovie, a film information website. My technical toolkit spans multiple programming 
              languages (Python, Java, PHP, etc.) and frameworks like React and Laravel. Beyond coding, 
              I have cultivated skills in teamwork and leadership through organizational roles, including managing 
              security for large-scale university events. I aspire to make a lasting impact in the tech industry by 
              creating applications that combine performance with exceptional user experiences.
            </motion.h2>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;