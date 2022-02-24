import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const backdropVariant = {
   visible: {
      opacity: 1,
   },
   hidden: {
      opacity: 0,
   },
};

const AnmneseModal = ({ showModal, ...props }: { showModal: boolean; children: ReactNode }) => {
   console.log(showModal);
   return (
      <AnimatePresence exitBeforeEnter>
         {showModal && (
            <motion.section className='backdrop' variants={backdropVariant} animate='visible' initial='hidden'>
               <section className='modal'>{props.children}</section>
            </motion.section>
         )}
      </AnimatePresence>
   );
};

export default AnmneseModal;
