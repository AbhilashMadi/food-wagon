import routes from "@/routes/Routes";
import type { FC } from "react";
import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import Loader from "@/components/splash/Loader";

const App: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
};

export default App;
