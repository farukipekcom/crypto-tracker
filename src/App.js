import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./components/List";
import Coin from "./components/Coin";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderBottom from "./components/HeaderBottom";
function App() {
  return (
    <Router>
      <Header />
      <HeaderBottom />
      <Switch>
        <Route exact path="/">
          <List />
        </Route>
        <Route path="/crypto/:id" component={Coin}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
