import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./pages/shared/Header";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
