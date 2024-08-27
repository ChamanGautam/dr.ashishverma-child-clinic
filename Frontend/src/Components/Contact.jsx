<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9785593019106480"
     crossorigin="anonymous"></script>
import './Contact.css';
import contlogo from '../assets/img/customer.png';
import { Link } from 'react-router-dom';
const Contact = () => {
    return (
        <div className='body_contact' id='contact'>
            <div className="contact_main">
                <div className="con_details">
                    <h1>For More Information Contact Us</h1>
                    <h3>Dr.Ashish Verma Clinic 1 </h3>
                    Bithuali Khurd Tiraha Sitapur Road, Lucknow <br />
                    <Link to="https://www.google.com/maps/place/Dr.Ashish+Verma(Child+specialist+%2F+Paediatrician)+and+Child+Vaccination+Centre+clinic+No.+2/@26.9312231,80.9318796,17z/data=!3m1!4b1!4m5!3m4!1s0x3999577d33cff997:0xc78ef5a42d592ff9!8m2!3d26.9312229!4d80.9340651" className="bi bi-geo-alt-fill"> Direction</Link><br />
                    <h3>Timing </h3>Monday to Saturday (6:00 pm to 8:30 pm)<br /> On prior Appointment Sunday (10:00 am to 12:00 pm)
                    <br />
                    <h3>Dr.Ashish Verma Clinic 2 </h3>Air Force Road Bakshi Ka Talab, Lucknow <br />
                    <Link to="https://www.google.com/maps/place/Dr.Ashish+Verma+Child+specialist+,+Paediatrician+and+Child+Vaccination+Centre/@26.9871979,80.9189699,19z/data=!4m13!1m7!3m6!1s0x39995158042af1f7:0x8a1519770726440c!2sDr.Ashish+Verma+Child+specialist+,+Paediatrician+and+Child+Vaccination+Centre!3b1!8m2!3d26.9871979!4d80.9195171!3m4!1s0x39995158042af1f7:0x8a1519770726440c!8m2!3d26.9871979!4d80.9195171" className="bi bi-geo-alt-fill"> Direction</Link><br />
                    <h3>Timing </h3>Monday to Saturday (5:00 pm to 6:00 pm)<br></br><br />
                    <Link className="call" to='tel:+919473646659'><i className="bi bi-telephone-fill"></i> +919473646659</Link>&nbsp;&nbsp;&nbsp;
                    <Link className="whatsapp" to="https://api.whatsapp.com/send?phone=9473646659"><i className="bi bi-whatsapp"></i> Contact On Whatsapp</Link>&nbsp;&nbsp;&nbsp;
                    <Link className="facebook" to="https://www.facebook.com/DrAshishVermaBKT/"><i className="bi bi-facebook"></i> Facebook</Link>&nbsp;&nbsp;&nbsp;
                    <Link className="instagram" to="https://instagram.com/childspecialistdrashishverma?igshid=YmMyMTA2M2Y="><i className="bi bi-instagram"></i> Instagram</Link>
                </div>
                <div className="con_icon">
                    <img src={contlogo} alt="Contact logo" />
                </div>
            </div>
        </div>
    );
}
export default Contact;