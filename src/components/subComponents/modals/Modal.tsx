import { dataInt } from '../../../interfaces/modalInterface';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';

const Modal: React.FC<dataInt> = ({ data, modalVisible, close, link }) => {
   if (!modalVisible) return null;

   return ReactDom.createPortal(
      <section className='modal-container'>
         <section className='modal-content' onClick={(e) => e.stopPropagation()}>
            {close ? (
               <button
                  onClick={() => {
                     close(false);
                  }}
               >
                  X
               </button>
            ) : null}
            <h3>{data.title}</h3>
            {data.description}
            {link ? (
               <>
                  <p>
                     Pour plus d'informations cf. section <Link to={`/${link}`}>{link}</Link>.
                  </p>
               </>
            ) : null}
         </section>
      </section>,
      document.getElementById('portal')!
   );
};

export default Modal;
