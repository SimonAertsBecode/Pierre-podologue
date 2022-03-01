import { useMemo } from 'react';

//*Import dependencies
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const craftStepsVariant = {
   visible: (i: number) => ({
      opacity: 1,
      y: i * 20,
      transition: {
         delay: i * 0.3,
      },
   }),
   hidden: (i: number) => ({ opacity: 0, y: '100vh', transition: { duration: i * 0.3 } }),
};

const craftSteps = [
   {
      title: "l'empreinte",
      text: "sera faite en position corrigée du pied (position neutre de référence). Des repères anatomiques y seront préalablement posés afin d'être le plus précis possible dans les corrections ajoutées. Le scanner utilisé est un scanner 3D qui permet de prendre l'ensemble du pied et permet d'être plus précis dans les corrections.",
   },
   {
      title: 'la Conceptualisation',
      text: 'La conceptualisation de la paire de semelles sera faite via un logiciel 3D',
   },
   { title: 'Usinage', text: 'PHOTO' },
   {
      title: 'Finitions',
      text: 'Adaptation de la semelle en fonction des spécifités du patient + PHOTP',
   },
];

const Crafing = () => {
   const { ref: steps, inView } = useInView({
      threshold: 0.4,
   });

   const renderLi = useMemo(() => {
      return craftSteps.map((step, i) => {
         return (
            <motion.li
               variants={craftStepsVariant}
               custom={i}
               initial='hidden'
               animate='visible'
               exit='hidden'
               key={step.title}
            >
               {step.title}
               <section className='modal'>{step.text}</section>
            </motion.li>
         );
      });
   }, []);

   return (
      <section className='crafting'>
         <h3>Confection de la semelle</h3>
         <section className='description'>
            <p>
               Une fois l'examen biomécanique terminé, si le port d'une paire de semelles est
               recommandé, (le podologue) passera à la réalisation de celle-ci.
            </p>
            <p>
               Les semelles proposées en cabinet sont des semelles <span>CAD-CAM </span>
               (conception assistée par ordinateur - fabrication assistée par des machines).
            </p>
            <p>
               Ce type de semelles permet d'avoir un contrôle au millimètre près des différentes
               corrections voulues et sont parfaitement reproductibles.
            </p>
         </section>
         <section className='craft-steps'>
            <motion.ol ref={steps} initial='show'>
               <AnimatePresence>{inView && renderLi}</AnimatePresence>
            </motion.ol>
         </section>
      </section>
   );
};

export default Crafing;
