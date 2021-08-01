import "assets/scss/style.scss"
import { BrowserRouter as Router, Route } from 'react-router-dom'
//pages
import LandingPage from 'pages/LandingPage'
import DetailPage from 'pages/DetailPage'
import Checkout from 'pages/Checkout'
function App() {
  return (
    <div className="App">
        <Router>
            <Route exact path="/" component={LandingPage}></Route>
            <Route exact path="/properties/:id" component={DetailPage}></Route>
            <Route exact path="/checkout" component={Checkout}></Route>
        </Router>
    </div>
  );
}

export default App;
