import { FC } from "react";
import { Route, withRouter } from "react-router-dom";
import routes from "routes";
const Layout: FC = () => {
  return (
    <>
      {routes.map(({ component: Component, path, ...rest }) => (
        <Route component={Component} key={path} {...rest} />
      ))}
    </>
  );
};

export default withRouter(Layout);
