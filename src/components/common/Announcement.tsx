import type { FC } from "react";
import { X } from "lucide-react";

const Announcement: FC = () => {
  return (
    <>
      <div className="flex h-[50px] justify-evenly bg-[#F17228]">
        <div className="flex w-[80%] items-center justify-center p-5 text-xl font-semibold text-white">
          Announcement text will be displayed here!!
        </div>
        <div className="flex items-center text-white">
          <X />
        </div>
      </div>
    </>
  );
};

export default Announcement;
