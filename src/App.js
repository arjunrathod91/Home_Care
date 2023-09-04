import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import SignUp from './Pages/SignUp'
import Mainpage from './Pages/Mainpage';
import Ambulance from './Pages/Ambulance';
import Meetexperts from './Pages/Meetexperts';
import ScanAndCheck from './Pages/ScanAndCheck';
import YourDetail from './Pages/YourDetail';
import About from './Pages/About'
import Feedback from './Pages/Feedback';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginPage from './Pages/LoginPage';
import Symptoms from './Pages/Symptoms';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signuppage" element={<SignUp />} />
          <Route path="/mainpage" element={<Mainpage />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/meetexperts" element={<Meetexperts />} />
          <Route path="/ambulance" element={<Ambulance />} />
          <Route path="/yourdetail" element={<YourDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/scanandcheck" element={<ScanAndCheck />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/symptoms" element={<Symptoms />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
