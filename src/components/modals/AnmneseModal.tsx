import { motion, AnimatePresence } from 'framer-motion';

const AnmneseModal = ({ ...props }) => {
   return (
      <AnimatePresence>
         (
         <motion.section className='modal'>
            <p>{props.children}</p>
         </motion.section>
         )
      </AnimatePresence>
   );
};

export default AnmneseModal;
