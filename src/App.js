import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./firebase/PrivateRoute";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Signin from "./pages/profile/signin";
import Signup from "./pages/profile/signup";
import Header from "./pages/shared/Header";
import Shop from "./pages/shop/Shop";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <PrivateRoute path="/shop">
          <Shop />
        </PrivateRoute>
        <Route path="/signup">
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
