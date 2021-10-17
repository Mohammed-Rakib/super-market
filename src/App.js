import { Switch, Route } from "react-router-dom";
import useFirebase from "./firebase/useFirebase";
import Home from "./pages/home/Home";
import Signin from "./pages/profile/signin";
import Signup from "./pages/profile/signup";
import Header from "./pages/shared/Header";

function App() {
  const { currentUser } = useFirebase();
  console.log(currentUser?.displayName || currentUser?.email);
  return (
    <>
      <Header />
      <Switch>
        <Route path="/profile">
          <Signup />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
