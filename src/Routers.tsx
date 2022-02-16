import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Path } from "./constants/paths";
import { defaultTheme } from "./styles/theme";

const Home = lazy(() => import("./containers/Home"));
const CatExplorer = lazy(() => import("./containers/CatExplorer"));
export const Routers = () => (
  <Switch>
    <Route path={Path.HOME} exact>
      <Suspense
        fallback={null}
      >
        <ThemeProvider theme={defaultTheme}>
          <Home />
        </ThemeProvider>
      </Suspense>
    </Route>
    <Route path={Path.CAT_EXPLORER}>
      <Suspense
        fallback={null}
      >
        <ThemeProvider theme={defaultTheme}>
          <CatExplorer />
        </ThemeProvider>
      </Suspense>
    </Route>
  </Switch>
  );
