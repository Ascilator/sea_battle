import { FC } from "react";
import { BrowserRouter as AppRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import { StartGame } from "@/components/StartGame";
import { Room } from "@/components/Room";

const Router: FC = () => {
  return (
    <AppRouter>
      <Switch>
        <Route exact path={"/"}>
          <StartGame />
        </Route>
        <Route exact path={"/:roomId"}>
          <Room />
        </Route>
      </Switch>
    </AppRouter>
  );
};

export { Router };
