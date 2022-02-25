import { motion, AnimatePresence } from 'framer-motion';

//** react icons */
import { ImCross } from 'react-icons/im';

const modal = {
   hidden: {
      x: '100vh',
      opacity: 0,
   },
   visible: {
      x: '0%',
      opacity: 1,
      transition: { delay: 0.3 },
   },
};

interface props {
   showModal: boolean;
   mouseLeaving: any;
}

const AnmneseModal: React.FC<props> = ({ showModal, mouseLeaving, ...props }) => {
   return (
      <AnimatePresence exitBeforeEnter>
         {showModal && (
            <motion.section
               // onMouseLeave={() => {
               //    mouseLeaving(false);
               // }}
               className='modal'
               variants={modal}
               animate='visible'
               initial='hidden'
               exit='hidden'
            >
               <button>
                  <ImCross />
               </button>
               <p>{props.children}</p>
            </motion.section>
         )}
      </AnimatePresence>
   );
};

export default AnmneseModal;
