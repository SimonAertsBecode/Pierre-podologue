import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

//** react icons */
import { ImCross } from 'react-icons/im';

const backdropVariant = {
   visible: {
      opacity: 1,
   },
   hidden: {
      opacity: 0,
   },
};

const modal = {
   hidden: {
      y: '-100vh',
      opacity: 0,
   },
   visible: {
      y: '30%',
      opacity: 1,
      transition: { delay: 0.5 },
   },
};

const AnmneseModal = ({ showModal, ...props }: { showModal: boolean; children: ReactNode }) => {
   return (
      <AnimatePresence exitBeforeEnter>
         {showModal && (
            <motion.section className='backdrop' variants={backdropVariant} animate='visible' initial='hidden' exit='hidden'>
               <motion.section className='modal' variants={modal}>
                  <button>
                     <ImCross />
                  </button>

                  {props.children}
               </motion.section>
            </motion.section>
         )}
      </AnimatePresence>
   );
};

export default AnmneseModal;
