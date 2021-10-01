import { FC } from "react";
import { Router as AppRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import { Room } from "@/components/Room";

const Router: FC = () => {
  const history = createBrowserHistory();
  return (
    <AppRouter history={history}>
      <Switch>
        <Route exact path={"/:roomId"}>
          <Room />
        </Route>
      </Switch>
    </AppRouter>
  );
};

export { Router };
