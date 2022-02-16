import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Path } from "./constants/paths";
import { defaultTheme } from "./styles/theme.ts";

const Entry = lazy(() => import("./containers/Home"));
export const Routers = () => (
  <Switch>
    <Route path={Path.HOME}>
      <Suspense
        fallback={null}
      >
        <ThemeProvider theme={defaultTheme}>
          <Entry />
        </ThemeProvider>
      </Suspense>
    </Route>
  </Switch>
  );
