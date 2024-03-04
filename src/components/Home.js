import React, { useState , useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useSpring, animated } from 'react-spring';
import img1 from '../images/header-image-1.jpg';
import img2 from '../images/header-image-2.jpg';
import search from '../images/search.jpg';
import firstImage from '../images/firstImage.jpg'
import secondImage from '../images/secondImage.jpg'
import thirdImage from '../images/thirdImage.jpg'
import sideimg from '../images/side-image.jpg';
import Signup from './Signup';
import Signin from './Signin';
import Modal from './Modal';

const Home = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isSigninOpen, setIsSigninOpen] = useState(false);
  const [showServices, setShowServices] = useState(false); /* animation for services */
  const [showContactForm, setShowContactForm] = useState(false);

  {/*animation for services section*/}
  useEffect(() => {
    const timeout = setTimeout(() => setShowServices(true), 500);
    return () => clearTimeout(timeout);
  }, []);
  const servicesProps = useSpring({
    opacity: showServices ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
{/* Sign up modal */}
  const openSignupModal = () => {
    setIsSignupOpen(true);
  };

  const closeSignupModal = () => {
    setIsSignupOpen(false);
  };
{/* Sign in modal */}
  const openSigninModal = () => {
    setIsSigninOpen(true);
  };

  const closeSigninModal = () => {
    setIsSigninOpen(false);
  };
  
 

  {/* contact us */}
  const openContactForm = () => {
    setShowContactForm(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };
 

  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <img src="" alt=""/>
          <span className='chrono'> CHRONOCAMPUS</span>
        </div>
        <div className="nav-links">
          <ul>
          <li><Link smooth  to="#home" className="active">Home</Link></li>
           <li><Link smooth to="#contact">Contact</Link></li>
            <li><Link  smooth to="/dashboard" >Dashboard</Link></li>
            <li><a  href="#" onClick={() => setIsSigninOpen(true)}>LogIn</a></li>
            <li><button onClick={() => setIsSignupOpen(true)} className='SignUp'>SignUp</button></li>
         </ul>
         {/* Search Box with Image */}
    <div className="search-box">
      <input type="text" placeholder="Search..." />
      <img src={search} alt="Search" className="search-icon" />
    </div> 
        </div>
        </nav>

      {/* Main Content */}
      <div className="main-content">
        <div className="text">
          <h1>Empower Your Day <br/> with Precision <br/> Planning!</h1>
          <p>Introducing Chronocampus, the ultimate Automated <br /> Timetable Generator. Effortless Scheduling, <br/> Maximum Efficiency. Your Time, Your Way!</p>
        </div>
        <div className="images">
          <div className='column'>
            <img src={img1} alt="" className='img1'/>
            <img src={img2} alt="" className='img2'/>
          </div>
          <div>
            <img src={sideimg} alt=" " className='sideimg'/>
          </div>
        </div>
      </div> 
      
  {/* services */}
  <animated.div className="services" style={servicesProps}>
  <h2>Services</h2>
  <div className="card">
    <div className="circle">
      <img src={secondImage} alt="First Service" />
    </div>
    <p>
      <h4>Fully Automated</h4>
      <br />
      Our system generates fully automated Timetable
    </p>
  </div>
  <div className="card">
    <div className="circle">
      <img src={thirdImage} alt="Second Service" />
    </div>
    <p>
      <h4>No Conflict</h4>
      <br />
    Our system generates, Conflict-free schedules
    </p>
  </div>
  <div className="card">
    <div className="circle">
      <img src={firstImage} alt="Third Service" />
    </div>
    <p>
     <h4>Manual Adjustment</h4> 
      <br />
      You can manually adjust the changes you want
    </p>
  </div>
  </animated.div>
      {/* Contact Form */}
     
      <div id='contact' className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <footer className="footer">
  <div className="footer-content">
    <div className="footer-section">
      <h2>Get in Touch</h2>
      <p>+92 42 111178956</p>
      <p>support@chrono-campus.pk</p>
    </div>
    <div className="footer-section">
      <h2>About</h2>
      <ul>
        <li>Our Story</li>
        <li>Career@CHRONOCAMPUS</li>
        <li>Contact Us</li>
        <li>Blogs</li>
        <li>Download Our App</li>
      </ul>
    </div>
    <div className="footer-section">
      <h2>Information</h2>
      <ul>
        
       
        <li>Privacy Policy</li>
        <li>FAQs</li>
        
        <li>Terms of Service</li>
        
      </ul>
    </div>
    <div className="footer-section">
      <h2>Newsletter Signup</h2>
      
      <p>Subscribe and Stay Updated!</p>
      <form>
        <input type="email" placeholder="Your email address" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  </div>
</footer>
      
       {/* Modals */}
     <Modal isOpen={isSignupOpen} onClose={closeSignupModal}>
        <Signup onClose={closeSignupModal} />
      </Modal>

      <Modal isOpen={isSigninOpen} onClose={closeSigninModal}>
        <Signin onClose={closeSigninModal} />
      </Modal>
     
    </div>
  );
}

export default Home;
