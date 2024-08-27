<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9785593019106480"
     crossorigin="anonymous"></script>
import Header from '../Common/Header';
import Aboutsec from './Aboutsec';
import Contact from './Contact';
import './Home.css';
import Appointment from './Appointment';
import Footer from '../Common/Footer';
import Slider from './Slider';
import { HashLink as Link } from 'react-router-hash-link';
import Service from './Service';
import Couter from './Couter';
import FeedbackSlider from './FeedbackSlider';
const Home = () =>{
    return(
        <div className='home'>
       <Header/>
       <div className="slide">
        <Slider/>
       </div>
       <div className="welcome">
        <div className="txt1">
            WELCOME TO DR.ASHISH VERMA CHILD CARE CENTER
        </div>
        <div className="txt2">We are Here to Heare and Heal Your Child Problems</div>
        <div className="buttons">
            <div className="appointment">
                <Link className="appointmentbtn" to="#appointment">Appointment</Link>
            </div>
        </div>
       </div>
       <Couter/>
       <div className="about">
        <div className="abouthead"> About <span> Dr.Ashish Verma Child Care Center</span></div>
        <div className="aboutdescription"><span>Dr.Ashish Verma Child Care Center</span><br/><hr/>Welcome to our Dr.Ashish Verma Child Specialist Clinic! We are dedicated to providing exceptional healthcare for children. we have 10 years experienced pediatrician to ensuring the well-being and healthy growth of your child. We offer a wide range of services, from routine check-ups and immunizations to specialized care for chronic conditions.  We understand that every child is unique, and we tailor our approach to meet the individual needs of each patient. At our Child Specialist Clinic, your child’s health and happiness are our top priority.</div>
       </div>
       <Aboutsec/>
       <Contact/>
       <Service/>
       <Appointment/>
       <FeedbackSlider/>
       <Footer/>
        </div>
    );
}
export default Home;