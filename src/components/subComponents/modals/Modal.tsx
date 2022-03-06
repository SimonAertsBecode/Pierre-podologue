import { Dispatch, SetStateAction } from 'react';
import ReactDom from 'react-dom';

interface dataInt {
   data: {
      title: string;
      description: JSX.Element;
   };
   modalVisible: boolean;
   close: Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FC<dataInt> = ({ data, modalVisible, close }) => {
   if (!modalVisible) return null;

   return ReactDom.createPortal(
      <section className='footcare-modal-container'>
         <section className='footcare-modal' onClick={(e) => e.stopPropagation()}>
            <button
               onClick={() => {
                  close(false);
               }}
            >
               X
            </button>
            <h4>{data.title}</h4>
            {data.description}
         </section>
      </section>,
      document.getElementById('portal')!
   );
};

export default Modal;
