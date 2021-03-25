import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import CosmosStore from "./pages/CosmosStore";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import Navbar from "./cmps/Navbar";
// import Profile from "./pages/Profile";
import { AuthProvider } from "./contexts/FirebaseContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style/global.scss";
// import PrivateRoute from './cmps/PrivateRoute.jsx'
function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Navbar />
          <Switch>
            {/* <PrivateRoute path="/" exact component={HomePage} /> */}
            <Route path="/Cart" component={Cart} />
            {/* <Route path="/Profile" component={Profile} /> */}
            <Route path="/store/:id" component={ProductPage} />
            <Route path="/store" component={CosmosStore} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/" component={HomePage} />
          </Switch>
          <footer>
          © 2021 developed by Yaniv Shabi
          </footer>

        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
