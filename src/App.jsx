import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// import Home from './components/Home';
import Home2 from './components/Home2';
import JoinPage from './components/JoinPage';
import PricePage from './components/PricePage';
import ProductsPage from './components/ProductsPage';
import ProfilePage from './components/ProfilePage';
import ProtectImagePage from './components/ProtectImagePage';
import LoginPage from './components/LoginPage';
import SettingsPage from './components/SettingsPage';
import LoginPrompt from './components/LoginPrompt';
import PlansPage from './components/PlansPage';
import PayPage from "./components/PayPage";
import ResetPassword from "./components/ResetPassword";
import Success from "./components/Success";
import Cancel from "./components/Cancel";
import ContactUs from "./components/ContactUs";
import ContactFormSuccess from "./components/ContactFormSuccess";
import About from "./components/AboutPageComponents/About";
import ExamplesPage from "./components/ExamplesPageComponents/ExamplesPage"

fetch('http://localhost:4242/results')
  .then(response => {
    console.log('i got here')
    return response.json()
  })

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path='/' element={<Home2/>} /> */}
        <Route exact path='/' element={<Home2/>} />
        <Route path='/join' element={<JoinPage/>} />
        <Route path='/pricing' element={<PricePage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/protect-image' element={<ProtectImagePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/settings' element={<SettingsPage />} />
        <Route path='/loginprompt' element={<LoginPrompt />} />
        <Route path='/plans' element={<PlansPage />} />
        <Route path='/pay' element={<PayPage />}/>
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/contact-us-thanks" element={<ContactFormSuccess />} />
        <Route path="/about" element={<About />} />
        <Route path="/examples" element={<ExamplesPage />} />

      </Routes>
    </Router>
  );
}

export default App;
