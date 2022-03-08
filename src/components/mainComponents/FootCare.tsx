import { MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';

//*react icons
import { FaArrowDown } from 'react-icons/fa';

//*Components import
import Modal from '../subComponents/modals/Modal';

const description = [
   {
      title: "L'orthoplastie",
      description: (
         <>
            <p>L'orthoplastie est une orthèse en silicone moulée sur mesure et destinée à:</p>
            <ul>
               <li>Corriger une déviation (Hallux valgus, orteils en griffes..)</li>
               <li>Protéger une zone douloureuse</li>
            </ul>
         </>
      ),
   },
   {
      title: "L'orthonyxie",
      description: <p>L'orthonyxie est une orthèse unguéale destinée à corriger la courbure de l'ongle afin d'éviter la réapparition d'un ongle incarné.</p>,
   },
];

const FootCare = () => {
   const [modalVisible, setModalVisible] = useState(false);
   const [dataForModal, setDateForModal] = useState(description[0]);

   const renderModal = (index: number, e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setDateForModal(description[index]);
      setModalVisible(true);
   };

   return (
      <section
         className='footcare-container'
         onClick={() => {
            setModalVisible(false);
         }}
      >
         <section className='description'>
            <p>
               Le soin de pied (pédicure médicale) au cabinet ou à <span>domicile</span> comprend la prise en charge esthétique et/ou thérapeuthique de différentes <Link to='/pathologie'>pathologies</Link> liées directement aux atteintes spécifiques
               du pied. Parfois, un appareillage spécifique via{' '}
               {description.map((item, index) => {
                  return (
                     <span key={item.title}>
                        <button
                           onClick={(e) => {
                              renderModal(index, e);
                           }}
                        >
                           {item.title}
                        </button>
                        ,{' '}
                     </span>
                  );
               })}
               ou <Link to='/semelle-fonctionnelle'>semelles fonctionnelles</Link> sera nécessaire pour éviter la chronicité de ces pathologies.
            </p>
         </section>

         <Modal data={dataForModal} modalVisible={modalVisible} close={setModalVisible} section='footcare'></Modal>

         <section className='diabetic'>
            <h4>En cas de diabète</h4>
            <section className='diabetic-description'>
               <p>Le patient diabétique doit se rendre au moins 2x par an chez le podologue afin de vérifier les éventuelles complications liées au diabète.</p>
               <p>
                  En effet, un diabète mal équilibré peut donner certaines complications: <span>Une neuropathie sensitive</span> (absence de douleur), <span>Une arthériopathie</span> (retard dans la cicatrisation),{' '}
                  <span>Des déformations osseuses</span>.
               </p>
            </section>
            <section className='diabetic-icon'>
               <FaArrowDown />
            </section>
            <section className='diabetic-advices'>
               <ul>
                  <li>Regarder tous les jours ses pieds (si pas possible, demander à un proche), regarder si pas de plaies</li>
                  <li>Ne pas marcher pieds nus quelles que soient les circonstances</li>
                  <li>Ne coupez pas vos ongles seuls</li>
                  <li>Signaler toute lésion ou coloration suspecte</li>
                  <li>Appliquer une crème hydratante tous les jours sur vos pieds</li>
                  <li>Faites appel à votre podologue pour soigner vos cors, durillons</li>
                  <li>Attention aux sources de chaleur. N'utilisez pas de produits agressifs.</li>
                  <li>Après la douche, sécher correctement vos pieds et insister dans les espaces entre les orteils pour éviter l'apparition de mycoses</li>
                  <li>Changer de chaussettes tous les jours. Il est fortement conseillé d'utiliser des chaussettes en coton et sans couture pour éviter les blessures</li>
               </ul>
            </section>
         </section>
      </section>
   );
};

export default FootCare;
