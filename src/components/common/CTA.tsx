import type { FC } from "react";
import "./cta.css";

const CTA: FC = () => {
  return (
    <div>
      <div className="cta flex flex-col">
        <div className="h-[112px] w-[728px] text-[57px] font-bold text-white ">
          Are you ready to order with the best deals?
        </div>

        <button className="flex px-[48px] py-[21px] ">Proceed to order </button>
      </div>
    </div>
  );
};

export default CTA;
