import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Settings from "./pages/Settings";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { SignUpProvider } from "./context/SignUpContext";
import { SignInProvider } from "./context/SignInContext";
import { UserInfoProvider } from "./context/UserInfoContext";

const App = () => {
  return (
    <div className="App">
      <SignUpProvider>
        <SignInProvider>
          <UserInfoProvider>
            <Router>
              <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />

                <Route path="/settings" element={<Settings />} />
                <Route path="/" element={<Dashboard />} />
                <Route
                  path="/dashboard"
                  element={<Navigate replace to="/" />}
                />
              </Routes>
            </Router>
          </UserInfoProvider>
        </SignInProvider>
      </SignUpProvider>
    </div>
  );
};

export default App;
