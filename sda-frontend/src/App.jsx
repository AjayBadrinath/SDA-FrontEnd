
import Home from './Home'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import VFD from './VFD'
import AutoCntl from './AutoCntl'
import Panel from './Panel'
import NavBar from './NavBar';
import CompanyProfile from './CompanyProfile';
import ControlPanel from './ControlPanel';
import DrivePanel from './DrivePanel';
import LVPanel from './LVPanel';
import ContactUs from './ContactUs';
import Submitted from './Submitted';
function App() {

  
  return (
  <Router basename='/SDA-FrontEnd'>
   <NavBar/>
  <Routes>
   
         <Route path ="/" element={<Home/>}></Route>
        <Route path="lvswitchgear" element={<VFD />}>
          
        </Route>
        <Route path="enclosures" element={<Panel />}>
          
        </Route>
        <Route path="automationcontrol" element={<AutoCntl />}>
          
        </Route>
        
        <Route path="companyprofile" element={<CompanyProfile />}>
          
        </Route>
        <Route path="controlpanel" element={<ControlPanel />}>
          
        </Route>
        <Route path="drivepanel" element={<DrivePanel />}>
          
        </Route>
        <Route path="lvpanel" element={<LVPanel />}>
          
        </Route>
        <Route path="contact-us" element={<ContactUs />}>
          
        </Route>
        <Route path="submitted" element={<Submitted />}>
          
        </Route>
      </Routes>
      </Router>
  )
 /*
  return(
   <>
   
<CompanyProfile/>
   
   </>

  )
  */

  
  
}

export default App
