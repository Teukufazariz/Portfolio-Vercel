import { motion } from "framer-motion"
import profilePic from '../assets/profileRiz.jpeg'
import profilePic2 from '../assets/profile.png'  

const Hero = ({ isCustomBackground }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.3 
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }

  return (
    <motion.div
      className={`border-b ${isCustomBackground ? 'border-babyBlue' : 'border-neutral-900'} pb-4 lg:mb-35`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      variants={containerVariants}
    >
      <motion.div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 order-last lg:order-first">      
          <motion.div className="flex flex-col items-center lg:items-start" variants={itemVariants}>
            <motion.h1
              className={`${isCustomBackground ? 'text-amber-800' : 'text-white'} text-4xl lg:text-5xl font-bold md:mb-3`}
              variants={itemVariants}
              transition={{ duration: 0.6 }}
            >
              Teuku Fazariz B.
            </motion.h1>
            <motion.span
              className={`${isCustomBackground ? 'text-babyBlue' : 'text-neutral-300'} text-2xl lg:text-3xl mt-4 sm:mt-0 tracking-tight font-semibold`}
              variants={itemVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              className={`${isCustomBackground ? 'text-gray-700' : 'text-neutral-300'} text-lg lg:text-xl font-medium mt-4 text-justify`}
              variants={itemVariants}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I am a passionate full-stack developer with a talent for building efficient, user-centric 
              web and mobile applications. With experience across front-end technologies like React, Tailwind CSS, 
              and Bootstrap, and back-end expertise in Laravel, PHP, and SQL, I strive to deliver scalable solutions 
              tailored to meet diverse needs. My academic and project experience, including creating applications like 
              BearHabit and OriMovie, have honed my ability to merge innovative design with functionality. I am driven 
              to craft digital experiences that are not only robust but also impactful for users.
            </motion.p>
          </motion.div>
        </div> 

        <motion.div className="w-full lg:w-1/2 lg:p-8 order-first lg:order-last mb-6 lg:mb-0" variants={itemVariants} transition={{ duration: 0.6, delay: 0.6 }}>
          <div className="flex justify-center items-center">
            <motion.img 
              className={`rounded-lg xl:ml-16 mt-10 sm:mt-0 ${isCustomBackground ? 'w-full' : 'w-96'}`}
              src={isCustomBackground ? profilePic2 : profilePic} 
              alt="profile"
              variants={imageVariants}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;