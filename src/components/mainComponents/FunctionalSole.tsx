import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

//*import component
import AnmneseModal from '../modals/AnmneseModal';

interface interModal {
   [key: string]: {
      status: boolean;
      text: string;
   };
}

const FunctionalSole = () => {
   const [showModal, setShowModal] = useState({
      firstModal: {
         status: false,
         text: "sera faite en position corrigée du pied (position neutre de référence). Des repères anatomiques y seront préalablement posés afin d'être le plus précis possible dans les corrections ajoutées. Le scanner utilisé est un scanner 3D qui permet de prendre l'ensemble du pied et permet d'être plus précis dans les corrections.",
      },
      secondModal: {
         status: false,
         text: 'La conceptualisation de la paire de semelles sera faite via un logiciel 3D',
      },
      thirdModal: {
         status: false,
         text: 'PHOTO',
      },
      fourthModal: {
         status: false,
         text: 'Adaptation de la semelle en fonction des spécifités du patient + PHOTP',
      },
   });

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

   const [width, setWidth] = useState(0);
   const carousel = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (carousel.current) {
         const { scrollWidth, offsetWidth } = carousel.current;
         setWidth(scrollWidth - offsetWidth);
      }
   }, []);

   const handleMouseEvent = (name: string, value: boolean) => {
      setShowModal((prevState) => ({ ...prevState, [name]: { ['status']: value } }));
   };

   const renderLi = (title: string, name: string, text: string): JSX.Element => {
      return (
         <>
            <li
               onMouseEnter={() => {
                  handleMouseEvent(name, true);
               }}
               onMouseLeave={() => {
                  handleMouseEvent(name, false);
               }}
            >
               {title}
            </li>
            <AnmneseModal
               showModal={(showModal as interModal)[name].status}
               mouseLeaving={handleMouseEvent}
            >
               {text}
            </AnmneseModal>
         </>
      );
   };

   return (
      <section className='functional-sole'>
         <h3>Semelle fonctionnel</h3>
         <section className='anamnese'>
            <section className='anamnese-steps'>
               <motion.section
                  className='carousel'
                  whileTap={{ cursor: 'grabbing' }}
                  ref={carousel}
               >
                  <motion.section
                     drag='x'
                     dragConstraints={{ right: 0, left: -width }}
                     className='inner-carousel'
                  >
                     {diagSteps.map((step) => {
                        return (
                           <section key={step.title} className='item'>
                              <h5>{step.title}</h5>
                              <p>{step.description}</p>
                           </section>
                        );
                     })}
                  </motion.section>
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
         <h3>Confection de la semelle</h3>
         <section className='crafting'>
            <section className='description'>
               <p>
                  Une fois l'examen biomécanique terminé, si le port d'une paire de semelles est
                  recommandé, (le podologue) passera à la réalisation de celle-ci'
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
               <ol>
                  {renderLi("L'empreinte", 'firstModal', showModal['firstModal'].text)}
                  {renderLi('Conceptualisation', 'secondModal', showModal['secondModal'].text)}
                  {renderLi('Usinage', 'thirdModal', showModal['thirdModal'].text)}
                  {renderLi('finitions', 'fourthModal', showModal['fourthModal'].text)}
               </ol>
            </section>
         </section>
      </section>
   );
};

export default FunctionalSole;
