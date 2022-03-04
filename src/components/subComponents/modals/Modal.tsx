import { Dispatch, SetStateAction } from 'react';

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
   return (
      <section className='footcare-modal'>
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
   );
};

export default Modal;
