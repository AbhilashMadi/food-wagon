import Loader from "@/components/splash/Loader";
import DataContex from "@/context/DataContex";
import { ThemeProvider } from "@/context/ThemeProvider";
import { routes } from "@/routes/Routes";
import type { FC } from "react";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Paths } from "./routes/paths";

const Home = lazy(() => import("@/pages/Home"));
const AuthLayout = lazy(() => import("@/pages/auth/AuthLayout"));
const Layout = lazy(() => import("@/pages/Layout"));
const NotFound = lazy(() => import("@/pages/handlers/NotFound"));


const App: FC = () => {

  return (
    <Suspense fallback={<Loader />}>
      <DataContex>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <Routes>
            <Route>
              <Route index path={Paths.HOME} element={<Home />} />
              <Route path={Paths.AUTH} element={<AuthLayout />} >
                {routes.filter((obj) => !obj.isPrivate).map((obj, ind) => <Route
                  index={ind === 0 ? true : false}
                  element={<obj.component />}
                  path={obj.path}
                  key={obj.path}
                />)}
              </Route>
              <Route path={Paths.LANDING} element={<Layout />} >
                {routes.filter((obj) => obj.isPrivate).map((obj, ind) => <Route
                  index={ind === 0 ? true : false}
                  element={<obj.component />}
                  path={obj.path}
                  key={obj.path}
                />)}
              </Route>
              <Route path={Paths.NOT_FOUND} element={<NotFound />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </DataContex>
    </Suspense >
  );
};

export default App;
