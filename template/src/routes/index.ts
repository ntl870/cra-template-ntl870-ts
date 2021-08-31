import { FC } from "react";
import LandingPage from "pages/LandingPage/LandingPage";

export interface route {
  path: string;
  component: FC;
  exact: boolean;
}

const routes: route[] = [
  {
    path: "/",
    component: LandingPage,
    exact: true,
  },
];

export default routes;
