import type { FC } from "react";
import * as animationData from "@/assets/loading-animation.json";
import Lottie from "react-lottie-player";

const Loader: FC = () => {
  return (
    <Lottie
      animationData={animationData}
      loop
      play
      className="w-20 sm:w-16 md:w-32 lg:w-40"
    />
  );
};

export default Loader;
