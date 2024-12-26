import { motion } from "framer-motion";
import { PROJECTS } from '../constants';

const Projects = ({ isCustomBackground }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.3, 
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={`border-b ${isCustomBackground ? 'border-babyBlue' : 'border-neutral-900'} pb-4`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2
        className={`${isCustomBackground ? 'text-amber-800' : 'text-white'} my-20 text-center text-4xl font-bold`}
        variants={projectVariants}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>
      <motion.div
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap text-center sm:text-justify justify-center lg:justify-center"
            variants={projectVariants}
            transition={{ duration: 0.6 }}
          >
            <div className='w-full lg:w-1/4 flex justify-center sm:justify-start'>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <motion.img 
                  src={project.image} 
                  width={150}
                  height={150}
                  alt={project.title} 
                  className={`${isCustomBackground ? 'bg-neutral-800 bg-opacity-30'  : 'bg-transparent'} mb-6 rounded justify-center`}
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </div>
            <div className='w-full max-w-xl lg:w-3/4'>
              <motion.h6
                className={`${isCustomBackground ? 'text-babyBlue' : 'text-white'} mb-2 text-xl font-semibold`}
                variants={projectVariants}
                transition={{ duration: 0.6 }}
              >
                {project.title}
              </motion.h6>
              <motion.p
                className={`${isCustomBackground ? 'text-gray-700' : 'text-neutral-300'} mb-4 text-justify`}
                variants={projectVariants}
                transition={{ duration: 0.6 }}
              >
                {project.description}
              </motion.p>
              <motion.div
                className="flex flex-wrap justify-center lg:justify-start"
                variants={projectVariants}
                transition={{ duration: 0.6 }}
              >
                {project.technologies.map((tech, idx) => (
                  <motion.span 
                    key={idx} 
                    className={`${isCustomBackground ? 'bg-babyBlue text-neutral-100' : 'bg-neutral-900 text-neutral-100'} mr-2 mb-2 px-2 py-1 text-sm font-medium rounded`}
                    whileHover={{ scale: 1.1, backgroundColor: "#2627b6" }}
                    transition={{ duration: 0.3 }}
                  >
                    {tech}
                  </motion.span> 
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;