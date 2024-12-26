import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const Experience = ({ isCustomBackground }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for each experience item
  const experienceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Variants for the year text
  const yearVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  // Variants for the role/company and description
  const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
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
        className={`my-20 text-center text-4xl font-bold ${isCustomBackground ? 'text-amber-800' : 'text-white'}`}
        variants={experienceVariants}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>
      <motion.div
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
            variants={experienceVariants}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={
              !isCustomBackground
              ? { scale: 1.02, boxShadow: "0px 4px 15px rgba(0,0,0,0.2)" }
              : {}
            }
          >
            <motion.div
              className="w-full lg:w-1/4"
              variants={yearVariants}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <p className={`mb-2 text-sm font-semibold ${isCustomBackground ? 'text-neutral-900' : 'text-white'}`}>
                {experience.year}
              </p>
            </motion.div>
            <motion.div
              className="w-full max-w-xl lg:w-3/4"
              variants={contentVariants}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
            >
              <motion.h6
                className={`mb-2 font-semibold ${isCustomBackground ? 'text-babyBlue' : 'text-white'}`}
                variants={contentVariants}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
              >
                {experience.role} - <span>{experience.company}</span>
              </motion.h6>
              <motion.p
                className={`mb-4 ${isCustomBackground ? 'text-gray-700' : 'text-neutral-400'} text-justify`}
                variants={contentVariants}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
              >
                {experience.description}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Experience;