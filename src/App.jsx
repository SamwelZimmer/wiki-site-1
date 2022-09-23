import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home2 from "./components/HomePageComponents/Home2";
import ProductsPage from './components/ProductPageComponents/ProductsPage';
import ProfilePage from './components/ProfilePageComponents/ProfilePage';
import ProtectImagePage from './components/ProtectPagesComponets/ProtectImagePage';
import Lovely from "./components/ProtectPagesComponets/Lovely";
import LoginPage from './components/LoginComponents/LoginPage';
import SettingsPage from './components/ProfilePageComponents/SettingsPage';
import LoginPrompt from './components/LoginComponents/LoginPrompt';
import PlansPage from './components/PlansPageComponents/PlansPage';
import PayPage from "./components/PayPage";
import ResetPassword from "./components/LoginComponents/ResetPassword";
import Success from "./components/Success";
import Cancel from "./components/Cancel";
import ContactUs from "./components/ContactUsComponents/ContactUs";
import ContactFormSuccess from "./components/ContactUsComponents/ContactFormSuccess";
import About from "./components/AboutPageComponents/About";
import ExamplesPage from "./components/ExamplesPageComponents/ExamplesPage";
import MyUpload from "./components/ProfilePageComponents/MyUpload";

fetch('http://localhost:4242/results')
  .then(response => {
    console.log('i got here')
    return response.json()
  })

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home2/>} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/my-upload' element={<MyUpload />} />
        <Route path='/protect-image' element={<ProtectImagePage />} />
        <Route path='/lovely' element={<Lovely />} />
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
