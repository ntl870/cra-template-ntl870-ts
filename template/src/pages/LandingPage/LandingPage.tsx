import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";
import logo from "logo.svg";
import "App.css";

const LandingPage: FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.reducer);

  const modifyCount = (type: string) => {
    dispatch({ type: type });
  };

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Hello, World!</h2>
      <div className="redux-section">
        <button
          className="redux-button"
          onClick={() => modifyCount("INCREASE")}
        >
          Increase
        </button>
        <button
          className="redux-button"
          onClick={() => modifyCount("DECREASE")}
        >
          Decrease
        </button>
      </div>
      <h1>{count}</h1>
    </header>
  );
};

export default LandingPage;
