import type  {FC} from "react";
import "./cta.css";


const CTA: FC = () => {
  return (
    <div>
      <div className="cta flex flex-col">
        <div className = "h-[112px] w-[728px] font-bold text-white text-[57px] ">
            Are you ready to order with the best deals?
        </div>

        <button className="flex px-[48px] py-[21px] ">Proceed to order </button>
 
      </div>

    </div>
  );
};

export default CTA;
