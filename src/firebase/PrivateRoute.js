import { Route, Redirect } from "react-router-dom";
import UseContext from "../context/useContext";

const PrivateRoute = ({ children, ...rest }) => {
  const { currentUser } = UseContext();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
