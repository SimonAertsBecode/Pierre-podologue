import { useMemo, useRef, useEffect, useState } from 'react';

//*Import dependencies
import { AnimatePresence, motion } from 'framer-motion';

const craftStepsVariant = {
   visible: (i: number) => ({
      opacity: 1,
      y: i * 30,
      x: 0,
      transition: {
         delay: i * 0.3,
         ease: [0.6, 0.1, -0.05, 0.95],
      },
   }),
   hidden: (i: number) => ({ opacity: 0, x: '-500vh', transition: { duration: i * 0.3 } }),
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
   const [liVisible, setLiVisible] = useState(false);
   const [olHeightContainer, setOlHeightContainer] = useState<number>();

   const olElement = useRef<HTMLOListElement>(null);

   //** without react-intersection-observer npm */
   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            const entry = entries[0];
            setLiVisible(entry.isIntersecting);
            if (entry.boundingClientRect.height > 10)
               setOlHeightContainer(entry.boundingClientRect.height);
         },
         { threshold: 0.4 }
      );
      if (olElement.current) observer.observe(olElement.current);
   }, []);

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
            <motion.ol
               ref={olElement}
               initial='show'
               style={{ height: olHeightContainer ? olHeightContainer : 'auto' }}
            >
               <AnimatePresence>{liVisible && renderLi}</AnimatePresence>
            </motion.ol>
         </section>
         <section className='next-steps'>
            <p>La suite et le suivi: </p>
            <ul>
               <li>
                  Il faut compter deux semaines après l'examen biomécanique pour la remise de
                  semelles.
               </li>
               <li>
                  Une révision de vos semelles dans les 3 mois après leur réalisation est comprise
                  dans le prix. Elle permettra de vérifier.
               </li>
               <li> Un bilan de contrôle 1 fois par an est conseillé.</li>
            </ul>
         </section>
      </section>
   );
};

export default Crafing;
