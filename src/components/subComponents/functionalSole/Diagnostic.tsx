import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Diagnostic = () => {
   const [carouselWidth, setCarouselWidth] = useState(0);
   const carousel = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (carousel.current) {
         const { scrollWidth, offsetWidth } = carousel.current;
         setCarouselWidth(scrollWidth - offsetWidth);
      }
   }, []);

   const diagSteps = [
      {
         title: 'Anamnese',
         description:
            "L'anamnèse permet de connaître le motif de la plainte, l'historique du patient, d'analyser ses différentes chaussures",
      },
      {
         title: 'Analyse statique',
         description:
            "L'analyse statique permet de vérifier les différentes compensations (épaules, dos, hanche, genoux, pied)",
      },
      {
         title: 'Examen palpatoire',
         description:
            "L'examen palpatoire permet la mise en évidence de certaines zones douloureuses afin de mieux cibler le traitement.",
      },
      {
         title: 'Mesures biométriques',
         description:
            "Ces mesures permettent d'en apprendre plus sur les différentes mobilités du patient, sur la position idéale de son pied et serviront pour la modélisation de la semelle sur logiciel 3D.",
      },
      {
         title: 'Analyse dynamique (marche, course)',
         description:
            "L'analyse de marche et course est une analyse de la cinématique (qualité du mouvement) et cinétique (quantification du mouvement) L'analyse de course permet également de savoir si la technique de course est adaptée aux plaintes du patient.",
      },
      {
         title: 'Conseils spécifiques',
         description:
            "Conseils de chaussage, d'entraînement, de technique de course, d'échauffement, d'étirement, de renforcement. Souvent, une prise en charge pluridisciplinaire ciblée sera recommandée (kinésithérapie, ostéopathie, médecin du sport…)",
      },
   ];

   return (
      <>
         <h3>Semelle fonctionnel</h3>
         <section className='anamnese'>
            <section className='anamnese-steps'>
               <motion.section
                  className='carousel'
                  whileTap={{ cursor: 'grabbing' }}
                  ref={carousel}
               >
                  <motion.ol
                     drag='x'
                     dragConstraints={{ right: 0, left: -carouselWidth }}
                     animate={{ x: [0, -40, 0] }}
                     transition={{ delay: 4, duration: 0.5, type: 'spring' }}
                     className='inner-carousel'
                  >
                     {diagSteps.map((step, index) => {
                        return (
                           <li key={step.title} className='item'>
                              <h5>
                                 {index + 1}) {step.title}
                              </h5>
                              <p>{step.description}</p>
                           </li>
                        );
                     })}
                  </motion.ol>
               </motion.section>
            </section>
            <section className='description'>
               <p>
                  Les semelles fonctionnelles permettent de corriger biomécaniquement la position du
                  pied et d'aligner les axes des membres inférieurs. Elles ont pour but de rétablir
                  la fonction normale du pied durant le déroulement du pas afin d'éviter certaines
                  compensations néfastes.
               </p>
               <p>
                  Au cabinet, elles sont fabriquées <span>sur-mesure</span> via un scanner et
                  logiciel <span>3D</span>. Les matériaux utilisés pour les semelles varient en
                  fonction de l'âge et de l'activité du patient.
               </p>
               <p>
                  <span>L'examen biomécanique</span> en cabinet permet de comprendre le
                  fonctionnement global du patient et de reconnaître si oui ou non un appareillage
                  via semelles fonctionnelles peut aider dans sa{' '}
                  <Link to='/pathologie'>pathologie</Link>. Cet examen biomécanique se déroule en
                  plusieurs étapes :
               </p>
            </section>
         </section>
      </>
   );
};

export default Diagnostic;
