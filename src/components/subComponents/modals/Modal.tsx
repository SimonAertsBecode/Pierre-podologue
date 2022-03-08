import { Dispatch, SetStateAction } from 'react';
import { dataInt } from '../../../interfaces/modalInterface';
import ReactDom from 'react-dom';

interface testData extends dataInt {
   modalVisible: boolean;
   close?: Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FC<testData> = ({ data, modalVisible, close, section }) => {
   if (!modalVisible) return null;

   return ReactDom.createPortal(
      <section className={`${section}-modal-container`}>
         <section className={`${section}-modal`} onClick={(e) => e.stopPropagation()}>
            {close ? (
               <button
                  onClick={() => {
                     close(false);
                  }}
               >
                  X
               </button>
            ) : null}
            <h4>{data.title}</h4>
            {data.description}
         </section>
      </section>,
      document.getElementById('portal')!
   );
};

export default Modal;
