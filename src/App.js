import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./components/List";
import Coin from "./components/Coin";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <Router>
      <Header />
      <div className="bottom-header">
        <div className="content">
          🎉 Give us 5 stars on
          <a
            href="https://github.com/farukipekcom"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <List cryptoList={crypto} />
        </Route>
        <Route path="/crypto/:id" component={Coin}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
