import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import LeftNavigation from "./components/LeftNavigation";
import Settings from "./pages/Settings";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


const App = () => {
  return (
    <div className="App">
      {/* <SignUp /> */}
      <LeftNavigation />
      {/* <SignIn /> */}
      <Settings />
    </div>
  );
};

export default App;
