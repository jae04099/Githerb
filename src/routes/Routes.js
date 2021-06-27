import { Route, Switch } from "react-router-dom";
import overviewPage from "../pages/Overview"

const Routes = () => {
  return (
    <Switch>
      <Route path="/overview" component={overviewPage}></Route>
    </Switch>
  )
}
