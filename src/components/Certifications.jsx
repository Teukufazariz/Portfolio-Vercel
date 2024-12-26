import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { CERTIFICATIONS } from '../constants';

const Certifications = ({ isCustomBackground }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isModalOpen]);

  const openModal = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCert(null);
    setIsModalOpen(false);
  };

 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0, 
      },
    },
  };

  const certVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, transition: {duration: 0.3}},
    visible: { opacity: 1, scale: 1, transition: {duration: 0.3}},
  };

  return (
    <motion.div
      className={`border-b ${isCustomBackground ? 'border-babyBlue' : 'border-neutral-900'} pb-4`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2
        className={`my-20 text-center text-4xl font-bold ${isCustomBackground ? 'text-amber-800' : 'text-white'}`}
        variants={certVariants}
        transition={{ duration: 0.6 }}
      >
        Certifications
      </motion.h2>
      <motion.div
        className="flex flex-col items-center space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={index}
            className={`w-full max-w-xl p-6 ${isCustomBackground ? 'bg-green bg-opacity-55' : 'bg-neutral-950'} rounded-lg shadow-md flex flex-col md:flex-row items-center`}
            variants={certVariants}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, boxShadow: "0px 4px 15px rgba(0,0,0,0.2)" }}
          >
            <motion.div
              className="w-40 h-40 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover rounded-md cursor-pointer"
                onClick={() => openModal(cert)}
              />
            </motion.div>

            <motion.div
              className={`flex flex-col justify-between flex-1 mt-4 md:mt-0 md:ml-6 ${isCustomBackground ? 'text-black' : 'text-white'}`}
              variants={certVariants}
              transition={{ duration: 0.6, delay: 0 }}
            >
              <div>
                <motion.h3
                  className={`text-2xl font-semibold ${isCustomBackground ? 'text-babyBlue' : 'text-white'}`}
                  variants={certVariants}
                  transition={{ duration: 0.6, delay: 0 }}
                >
                  {cert.title}
                </motion.h3>
                <motion.p
                  className={`text-xl ${isCustomBackground ? 'text-black' : 'text-neutral-400'}`}
                  variants={certVariants}
                  transition={{ duration: 0.6, delay: 0 }}
                >
                  {cert.issuer}
                </motion.p>
                <motion.p
                  className={`text-sm ${isCustomBackground ? 'text-gray-700' : 'text-neutral-500'}`}
                  variants={certVariants}
                  transition={{ duration: 0.6, delay: 0 }}
                >
                  {cert.date}
                </motion.p>
              </div>
              <motion.button
                onClick={() => openModal(cert)}
                className={`mt-4 inline-block self-center ${isCustomBackground ? 'text-black hover:text-cyan-900' : 'text-cream hover:text-white'}`}
                whileHover={{ scale: 1.05, color: "#06b6d4" }}
                transition={{ duration: 0.3 }}
              >
                View Credential
              </motion.button>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
      {isModalOpen && selectedCert && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900 bg-opacity-50"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalVariants}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-lg max-w-3xl w-full mx-4 my-8 flex flex-col max-h-screen"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10"
              variants={certVariants}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold">Certificate: {selectedCert.title}</h3>
              <motion.button
                onClick={closeModal}
                className="text-gray-700 hover:text-gray-900 text-2xl"
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                &times;
              </motion.button>
            </motion.div>
            <motion.div
              className="p-4 overflow-auto flex-grow"
              variants={certVariants}
              transition={{ duration: 0.3 }}
            >
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Certifications;