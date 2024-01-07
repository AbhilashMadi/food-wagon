import type { FC } from "react";
import {X} from "lucide-react";

const Announcement: FC = () => {
  return (
    <>
      <div className="bg-[#F17228] h-[50px] flex justify-evenly">
        <div className="text-white w-[80%] flex items-center justify-center p-5 font-semibold text-xl">Announcement text will be displayed here!!</div>
        <div className="text-white flex items-center"><X/></div>
      </div>
    </>

  );
};

export default Announcement;
