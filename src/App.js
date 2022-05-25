import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import AddService from "./pages/AddService/AddService";
import Booking from "./pages/Booking/Booking/Booking";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import ManageServices from "./pages/ManageServices/ManageServices";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="/manageServices">
              <ManageServices></ManageServices>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
