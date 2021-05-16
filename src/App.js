import './App.css';
import './props.css'
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './components/Home'
import Header from './components/Header'
import Button from './components/Button'
import Footer1 from './components/Footer1'
import Footer2 from './components/Footer2'
import Footer3 from './components/Footer3'

function App() {
  return (
    <>
    {/* <BrowserRouter>
    <Route path="/" component = {Home} />
   </BrowserRouter> */}
  <Header />
  <Home />
  <Button />
  <Footer1 />
  <Footer2 />
  <Footer3 />
  </>
  );
}

export default App;
