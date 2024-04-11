import Navbar from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Form from "./pages/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='contents'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/explore'>
              <Explore />
            </Route>
            <Route path='/connect'>
              <Form />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
