import { dataInt } from '../../../interfaces/modalInterface';

const Section: React.FC<dataInt> = ({ data, section }) => {
   return (
      <section className={`${section}-modal-container`}>
         <section className={`${section}-modal`}>
            <h4>{data.title}</h4>
            {data.description}
         </section>
      </section>
   );
};

export default Section;
