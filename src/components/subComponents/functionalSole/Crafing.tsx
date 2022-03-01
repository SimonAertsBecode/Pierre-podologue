import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

//* import components
import AnmneseModal from '../../modals/AnmneseModal';

const craftStepsVariant = {
   visible: (i: number) => ({
      opacity: 1,
      y: i * 10,
      transition: {
         delay: i * 0.3,
      },
   }),
   hidden: { opacity: 0, y: '-100vh' },
};

const Crafing = () => {
   const [craftingStepsHeight, setCraftingStepsHeight] = useState(0);
   const [craftingVisible, setCraftingVisible] = useState(false);

   const modals = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (modals.current) setCraftingStepsHeight(modals.current?.offsetTop);
   }, []);

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

   const scrollAnimation = () => {
      console.log('coucou');
      const { scrollY, innerHeight } = window;

      if (craftingStepsHeight < scrollY + innerHeight) {
         setCraftingVisible(true);
      }
   };

   useEffect(() => {
      console.log(craftingVisible);
   });

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
         <section className='craft-steps' ref={modals}>
            <ol onScroll={scrollAnimation}>
               {craftSteps.map((step, index) => {
                  return (
                     craftingVisible && (
                        <motion.li key={step.title} custom={index} variants={craftStepsVariant}>
                           {step.title}
                           <AnmneseModal craftingStepsHeight={craftingStepsHeight}>
                              {step.text}
                           </AnmneseModal>
                        </motion.li>
                     )
                  );
               })}
            </ol>
         </section>
      </section>
   );
};

export default Crafing;
