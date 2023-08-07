import logo from './logo.svg';
import Header from './components/Header';
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import Navigation from './components/Navigation';
import BreadCrumb from './components/BreadCrumb';
import Footer from './components/Footer';
import MainArea from './components/MainArea';

function App() {
  return (
    <div id='app'><Header/>
    <div id='grid'>
    <span id='g1'><Navigation/></span>
    <span id='g2'><MainArea/></span></div>
    <Footer/></div>
  );
}

export default App;
